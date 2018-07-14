import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import xssFilters from 'xss-filters';

import { endpoints } from '../config';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    let timer;
    this.state = {
      validation: {
        msg: 'Submit',
        error: ''
      },
      inputs: {
        name: '',
        email: '',
        inquiry: ''
      },
      useModal: this.props.useModal || null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormMessage = this.handleFormMessage.bind(this);
    this.iOS =
      typeof navigator != 'undefined'
        ? !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
        : false;
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem('contact')) {
      const { validation, inputs } = JSON.parse(
        localStorage.getItem('contact')
      );
      this.setState({
        validation,
        inputs
      });
    }

    // Ugh ios safari bug w/ fixed modals
    if (this.iOS && this.props.useModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.width = '100%';
      document.body.style.position = 'fixed';
    }
  }

  handleSubmit(e, node) {
    e.preventDefault();
    clearTimeout(this.timer);
    const contact = this.state.inputs;
    // get current amount of form submissions

    // prevent more than 2 form submissions
    if (contact.name && contact.email && contact.inquiry) {
      this.setState(previousState => {
        previousState.validation['msg'] = '1 sec...';
        previousState.validation['error'] = false;
        return previousState;
      });
      axios
        .post(endpoints.contact, {
          name: xssFilters.inHTMLData(contact.name),
          email: xssFilters.inHTMLData(contact.email),
          inquiry: xssFilters.inHTMLData(contact.inquiry)
        })
        .then(response => this.handleFormMessage(response.data))
        .catch(error => this.handleFormMessage('Something went wrong :('));
    } else {
      this.setState(previousState => {
        previousState.validation['error'] = true;
        return previousState;
      });
      this.timer = setTimeout(() => {
        this.setState(previousState => {
          previousState.validation['error'] = false;
          return previousState;
        });
      }, 1000);
    }
  }
  handleChange(e) {
    const filterType = e.target.name;
    const value = e.target.value;
    const types = ['name', 'email', 'inquiry'];
    if (value.includes('<script>')) {
      this.setState(previousState => {
        previousState.validation['msg'] = 'Watcha doing there?';
        return previousState;
      });
    } else {
      types.forEach(type => {
        type == filterType
          ? this.setState(previousState => {
              previousState.validation['error'] = false;
              previousState.validation['msg'] = 'Submit';
              previousState.inputs[type] = value;
              return previousState;
            })
          : '';
      });
    }
  }
  handleFormMessage(msg) {
    // get current amount of form submissions
    this.setState(previousState => {
      previousState.validation['msg'] = msg;
      return previousState;
    });

    if (localStorage) {
      localStorage.setItem('contact', JSON.stringify(this.state));
    }

    // Close the modal if submitted/failed after 2s
    if (this.state.useModal) {
      setTimeout(() => this.props.dismissModal(), 1200);
    }
  }
  render() {
    const error = this.state.validation.error;
    let errorClass = error ? 'error' : '';
    const errMsgs = [
      'Lol, try again. 😀',
      "Nope, you gotta fill 'em out. 😬",
      'Almost, but not happening. 😒',
      'Fill those out^^^ 😕'
    ];
    let state = this.state.validation.msg !== 'Submit' ? true : false;
    let errMsg = () => errMsgs[Math.floor(Math.random() * errMsgs.length)];
    return (
      <section
        id="contact"
        className={`contact wrapper ${this.state.useModal ? 'modal' : ''} `}
        onClick={e => {
          if (e.target.classList.contains('modal')) {
            this.props.dismissModal();
          }
        }}
      >
        <div
          className={`container ${
            this.state.useModal ? 'pattern-background' : ''
          } `}
        >
          <div className="contact__heading heading">
            <h2>Get a Hold of Me</h2>
          </div>
          <div className="contact__form">
            <form
              className={state ? 'disabled' : ''}
              onSubmit={e => this.handleSubmit(e, ReactDOM.findDOMNode(this))}
            >
              <input
                disabled={state}
                className={errorClass}
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="off"
                value={this.state.inputs.name}
                onChange={this.handleChange}
              />
              <input
                disabled={state}
                className={errorClass}
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                value={this.state.inputs.email}
                onChange={this.handleChange}
              />
              <textarea
                disabled={state}
                className={errorClass}
                name="inquiry"
                placeholder="Inquiry"
                autoComplete="off"
                value={this.state.inputs.inquiry}
                onChange={this.handleChange}
              />
              {this.state.useModal ? (
                <div className="modal__footer">
                  <div
                    className="modal__close"
                    onClick={() => this.props.dismissModal()}
                  >
                    <span>Cancel</span>
                  </div>
                  <input
                    disabled={state}
                    type="submit"
                    onClick={() => errMsg()}
                    value={error ? errMsg() : this.state.validation.msg}
                  />
                </div>
              ) : (
                <input
                  disabled={state}
                  type="submit"
                  onClick={() => errMsg()}
                  value={error ? errMsg() : this.state.validation.msg}
                />
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }

  componentWillUnmount() {
    // Ugh ios safari bug w/ fixed modals
    if (this.iOS && this.props.useModal) {
      document.body.style = '';
    }
  }
}

export default Contact;
