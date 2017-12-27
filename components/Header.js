import React from "react";
import Link from "next/link";

import { title, nav, links } from "../config";

import Nav from "./Nav";

const Header = props => {
  return (
    <header className="nav">
      <div className="hoverPill" />

      <div className="container">
        <h1 className="site-brand">
          <Link prefetch href="/">
            <a>{title}</a>
          </Link>
        </h1>
        <Nav nav={nav} onlyIcons={false} showModal={props.showModal} />
      </div>
    </header>
  );
};

export default Header;
