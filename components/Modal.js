import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Router from "next/router";

import Contact from "./Contact";

const Modal = ({
  toggle = { open: false, content: {} },
  closeText = "Close",
  submitText = "Submit",
  dismissModal = e => e.preventDefault(),
  children
}) => {
  return (
    <CSSTransitionGroup
      transitionName="growIn"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      {toggle.open && (
        <section className="wrapper modal" onClick={() => dismissModal(false)}>
          <div className="container">
            {children}
            <div className="modal__footer">
              <div className="modal__close">
                <a onClick={() => dismissModal(false)}>{closeText}</a>
              </div>
              <div className="modal__submit">
                <a className="" href={toggle.content.link} target="_blank">
                  {submitText}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </CSSTransitionGroup>
  );
};

export default Modal;
