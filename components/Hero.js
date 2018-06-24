import React from "react";
import Link from "next/link";

import Icon from "./Icon";
import Writing from "../static/writing.svg";

import { parallax } from "../helpers";

class Hero extends React.Component {
  componentDidMount() {
    parallax([".hero__heading", ".hero__intro"]);
  }
  render() {
    return (
      <section className="hero wrapper">
        <div id="text-wrapper" className="container">
          {/* <div className="hero__illustration">
          <Writing />
        </div> */}
          <div className="hero__heading heading">
            <h1 className="uppercase">Sometimes I Write Things...</h1>
          </div>
          <div className="hero__intro">
            <h2>
              I write about things related to Software Development, design, and
              random philisophical thoughts.
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
