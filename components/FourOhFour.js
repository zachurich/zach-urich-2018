import React from "react";
import Router from "next/router";

import Link from "next/link";

const FourOhFour = props => {
  return (
    <div className="fourOhFour">
      <h1 className="fourOhFour__message">Whoops!</h1>
      <h2>
        "<em>
          <a href={`${props.url}`}>{props.url}</a>
        </em>" doesn't exist.
      </h2>
      <Link href="/">
        <a className="button fourOhFour__link">Go Home</a>
      </Link>
    </div>
  );
};

export default FourOhFour;
