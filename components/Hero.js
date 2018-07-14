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
      <section className="hero wrapper pattern-background">
        <div id="text-wrapper" className="container">
          <div className="hero__heading heading">
            <h1 className="uppercase">{this.props.title}.</h1>
          </div>
          {this.props.date && (
              <span className="hero__date">{this.props.date}</span>
          )}
          {this.props.description && (
            <div className="hero__intro">
              <h2>{this.props.description}</h2>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Hero;
