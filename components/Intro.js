import React from "react";
import Link from "next/link";

import Blob from "../static/blob.svg";

import { parallax, createAnimatedHeadingHtml } from "../helpers";

import { SITE_TITLE, SITE_INTRO } from "../config";

class Intro extends React.Component {
  componentDidMount() {
    parallax([".intro__text", ".intro__blob"]);
  }
  render() {
    const links = this.props.links;
    return (
      <section className="intro wrapper">
        <div className="container">
          <div className="intro__box box">
            <div className="intro__text">
              <h1
                className="blue animate__children"
                dangerouslySetInnerHTML={{
                  __html: createAnimatedHeadingHtml(SITE_TITLE)
                }}
              />
              <h2>{SITE_INTRO}</h2>
              <div className="intro__blob">
                <Blob />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
