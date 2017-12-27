import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Contact from "./Contact";

export default class ContactHOC extends React.Component {
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
            dismissModal={this.props.dismissModal}
          />
        )}
      </ReactCSSTransitionGroup>
    );
  }
}
