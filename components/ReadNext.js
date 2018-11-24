import React from "react";
import Link from "next/link";

const ReadNext = props => {
  return (
    <div className="readNext">
      Read Next:
      <Link
        href={{ pathname: "/post", query: { slug: props.uid } }}
        as={`/writing/${props.uid}`}
        prefetch
      >
        <a>
          <span className="readNext__link">{props.title}</span>
        </a>
      </Link>
    </div>
  );
};

export default ReadNext;
