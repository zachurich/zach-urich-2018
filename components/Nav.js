import React from "react";
import Link from "next/link";

import Icon from "./Icon";

import House from "../static/icon_house.svg";
import Briefcase from "../static/icon_briefcase.svg";
import Pencil from "../static/icon_pencil.svg";
import Mail from "../static/icon_mail.svg";

import { hoverTransitionEffect } from "../helpers";

class Nav extends React.Component {
  constructor() {
    super();

    this.handleAnchorScroll = this.handleAnchorScroll.bind(this);
  }
  componentDidMount() {
    this.handleAnchorScroll();
    document.addEventListener("DOMContentLoaded", hoverTransitionEffect.init());
  }
  handleAnchorScroll() {
    // Get all anchors
    const anchors = document.querySelectorAll("a");
    anchors.forEach(anchor => {
      // If we have a hash
      if (anchor.href.includes("#")) {
        // rip out the part after the hash and compose into selector
        const elToScroll = document.querySelector(
          `#${anchor.href.split("#")[1]}`
        );

        // add event listener to the anchor
        anchor.addEventListener(
          "click",
          e => (elToScroll ? scrollWithOffset(e, elToScroll) : null)
        );
      }

      function scrollWithOffset(e, el) {
        e.preventDefault();
        el.scrollIntoView(true);
        if (typeof window !== "undefined") {
          window.scrollBy(0, -40);
        }
      }
    });
  }
  render() {
    let icon = false;
    let props = this.props;
    return (
      <div className="items">
        {props.nav.map(item => {
          switch (item.icon) {
            case "pencil":
              icon = Pencil;
              break;
            case "briefcase":
              icon = Briefcase;
              break;
            case "house":
              icon = House;
              break;
            case "mail":
              icon = Mail;
              break;
          }
          if (!props.onlyIcons) {
            if (item.external) {
              return (
                <a className="item" key={item.icon} href={item.path}>
                  <Icon className={item.icon} animate={false}>
                    {icon()}
                  </Icon>
                  {item.name}
                </a>
              );
            } else if (item.modal) {
              return (
                <a
                  key={item.name}
                  href={this.props.showModal ? "/?contact" : "/#contact"}
                  className="item"
                  onClick={
                    this.props.showModal ? e => this.props.showModal(e) : null
                  }
                >
                  <Icon className={item.icon} animate={false}>
                    {icon()}
                  </Icon>
                  {item.name}
                </a>
              );
            } else {
              return (
                <Link prefetch key={item.name} href={item.path}>
                  <a
                    href={item.modal && this.props.showModal ? "/?contact" : ""}
                    className="item"
                    onClick={
                      item.modal && this.props.showModal
                        ? e => this.props.showModal(e)
                        : null
                    }
                  >
                    <Icon className={item.icon} animate={false}>
                      {icon()}
                    </Icon>
                    {item.name}
                  </a>
                </Link>
              );
            }
          } else {
            if (item.external) {
              return (
                <a className="item" key={item.icon} href={item.path}>
                  <Icon className={item.icon} animate={false}>
                    {icon()}
                  </Icon>
                </a>
              );
            } else {
              return (
                <Link prefetch key={item.icon} href={item.path} prefetch>
                  <a className="item">
                    <Icon className={item.icon} animate={false}>
                      {icon()}
                    </Icon>
                  </a>
                </Link>
              );
            }
          }
        })}
      </div>
    );
  }
  componentWillUnmount() {
    // Remove all anchor event listeners
    const anchors = document.querySelectorAll("a");
    anchors.forEach(anchor => {
      anchor.removeEventListener("click", function() {});
    });

    // Remove that hoverTransition effect
    document.removeEventListener(
      "DOMContentLoaded",
      hoverTransitionEffect.init()
    );
  }
}

export default Nav;
