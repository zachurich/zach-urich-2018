import React from 'react';
import Link from 'next/link';

import { title, nav } from '../config';

import Nav from './Nav';

class Header extends React.Component {
  state = {
    theme: 'dark'
  };
  componentDidMount() {
    let theme = JSON.parse(localStorage.getItem('theme'));
    if (localStorage && localStorage.getItem('theme')) {
      this.setState({ theme }, () => {
        if (typeof document != 'undefined') {
          document
            .querySelector('body')
            .classList.add(`${this.state.theme}-theme`);
        }
      });
    }
    document.addEventListener('touchstart', function() {}, true);
  }
  switchTheme = () => {
    let theme = this.state.theme === 'dark' ? 'light' : 'dark';
    document.querySelector('body').classList.toggle('dark-theme');
    this.setState({ theme });
    if (localStorage) {
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  };
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
        <div className="theme-toggle" onClick={() => this.switchTheme()}>
          {this.state.theme === 'dark' ? 'light' : 'dark'} Theme
        </div>
      </header>
    );
  }
}

export default Header;
