import React from "react";
import Link from "next/link";

import { title, nav, links } from "../config";

import Nav from "./Nav";

class Header extends React.Component {
  state = {
    theme: 'Dark'
  }
  componentDidMount() {
    let theme = JSON.parse(localStorage.getItem("theme"))
    if (localStorage && localStorage.getItem("theme")) {
      this.setState({ theme })
      if(theme === 'Dark') {
        document.querySelector('body').classList.add('dark-theme');
      } else {
        document.querySelector('body').classList.remove('dark-theme');
      }
    }
    document.addEventListener("touchstart", function(){}, true);
  }
  switchTheme = () => {
    document.querySelector('body').classList.toggle('dark-theme');
    let theme = this.state.theme === 'Dark' ? 'Light' : 'Dark'
    this.setState({ theme });
    if (localStorage) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }
  render() {
    return (
      <header className="nav">
        <div className="hoverPill" />
  
        <div className="container">
          <h1 className="site-brand">
            <Link prefetch href="/">
              <a>{title}</a>
            </Link>
          </h1>
          <Nav nav={nav} onlyIcons={false} url={this.props.url || null} />
        </div>
        <div 
          className="theme-toggle" 
          onClick={() => this.switchTheme()}
        >
          { this.state.theme === 'Dark' ? 'Light' : 'Dark' } Theme
        </div>
      </header>
    );
  }
};

export default Header;
