import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Router from "next/router";

import Contact from "./Contact";

export default class ContactHOC extends React.Component {
  constructor() {
    super();

    this.dismissModal = this.dismissModal.bind(this);
  }
  dismissModal() {
    const { url } = this.props;
    Router.push(`${url.pathname}`);
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="growIn"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
      >
        {this.props.url.query.contact && (
          <Contact
            id={this.props.url.query.contact}
            useModal={true}
            dismissModal={this.dismissModal}
          />
        )}
      </ReactCSSTransitionGroup>
    );
  }
}
