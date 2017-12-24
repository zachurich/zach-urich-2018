import React from "react";
import Link from "next/link";

const EndOfList = props => {
  return (
    <div className="endOfList">
      <p>That's it so far.</p>
      {props.text ? <p>{props.text}</p> : null}
      {props.page && props.pageTitle ? (
        <Link href={props.page}>
          {props.pageTitle}
          <span>?</span>
        </Link>
      ) : null}
    </div>
  );
};

export default EndOfList;
