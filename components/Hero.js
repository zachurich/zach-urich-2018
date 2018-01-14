import React from "react";
import Link from "next/link";

import Icon from "./Icon";
import Writing from "../static/writing.svg";

const Hero = props => {
  return (
    <section className="hero wrapper">
      <div className="container">
        {/* <div className="hero__illustration">
          <Writing />
        </div> */}
        <div className="hero__heading heading">
          <h1 className="uppercase">Sometimes I Write Things...</h1>
        </div>
        <div className="hero__intro">
          <h2>
            I write about things related to Web Development, design, and random
            philisophical thoughts. I hope you can find some value in the words
            I have to say.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
