import React from "react";
import Link from "next/link";

import { SITE_TITLE, SITE_NAV } from "../config";

import Nav from "./Nav";

class Header extends React.Component {
  state = {
    theme: "light"
  };
  componentDidMount() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    if (localStorage && localStorage.getItem("theme")) {
      this.setState({ theme }, () => {
        if (typeof document != "undefined") {
          document
            .querySelector("body")
            .classList.add(`${this.state.theme}-theme`);
        }
      });
    }
    document.addEventListener("touchstart", function() {}, true);
  }
  switchTheme = () => {
    let theme = this.state.theme === "dark" ? "light" : "dark";
    document.querySelector("body").classList = `${theme}-theme`;
    this.setState({ theme });
    if (localStorage) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  };
  render() {
    return (
      <header className="nav">
        <div className="hoverPill" />

        <div className="container">
          <h1 className="site-brand">
            <Link prefetch href="/">
              <a>{SITE_TITLE}</a>
            </Link>
          </h1>
          <Nav nav={SITE_NAV} onlyIcons={false} url={this.props.url || null} />
        </div>
        <div className="theme-toggle" onClick={() => this.switchTheme()}>
          {this.state.theme === "dark" ? "light" : "dark"} Theme
        </div>
      </header>
    );
  }
}

export default Header;
