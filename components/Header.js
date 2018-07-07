import React from "react";
import Link from "next/link";

import { title, nav, links } from "../config";

import Nav from "./Nav";

class Header extends React.Component {
  state = {
    theme: 'Dark'
  }
  componentDidMount() {
    document.addEventListener("touchstart", function(){}, true);
  }
  switchTheme = () => {
    document.querySelector('body').classList.toggle('dark-theme');
    this.setState({
      theme: this.state.theme === 'Dark' ? 'Light' : 'Dark'
    });
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
          { this.state.theme } Theme
        </div>
      </header>
    );
  }
};

export default Header;
