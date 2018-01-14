import React from "react";
import Link from "next/link";

import Nav from "./Nav";

const Footer = props => {
  return (
    <footer className="footer wrapper">
      <div className="footer__nav">
        <Nav nav={props.nav} onlyIcons={true} url={props.url} />
      </div>
      <div className="footer__links">
        {props.links.map((link, i) => {
          return (
            <div key={link.name} className="link">
              <a href={link.url}>{link.name}</a>
              {i < props.links.length - 1 ? <span className="circ" /> : ""}
            </div>
          );
        })}
      </div>
      <div className="footer__copyright">
        <p>Copyright {new Date().getFullYear()} Zach Urich</p>
      </div>
    </footer>
  );
};

export default Footer;
