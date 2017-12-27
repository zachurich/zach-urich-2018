import React from "react";
import Link from "next/link";

const ReadNext = props => {
  return (
    <div className="readNext">
      Read Next:
      <Link href={`/writing/${props.post.slug}`}>
        <a>
          <span className="readNext__link">{props.post.title}</span>
        </a>
      </Link>
    </div>
  );
};

export default ReadNext;
