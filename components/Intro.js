import React from "react";
import Link from "next/link";

import Blob from "../static/blob.svg";

import { title, intro } from "../config";

const Intro = props => {
  const links = props.links;
  return (
    <section className="intro wrapper">
      <div className="container">
        <div className="intro__box box">
          <div className="intro__text">
            <h1 className="blue">
              {title.split("").map((l, i) => <span key={i}>{l}</span>)}
            </h1>
            <h2>{intro}</h2>
            <div className="intro__blob">
              <Blob />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
