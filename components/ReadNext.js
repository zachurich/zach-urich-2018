import React from "react";
import Link from "next/link";

const ReadNext = props => {
  return (
    <div className="readNext">
      Read Next:
      <Link
        href={{ pathname: "/post", query: { slug: props.post.slug } }}
        as={`/writing/${props.post.slug}`}
        prefetch
      >
        <a>
          <span className="readNext__link">{props.post.title}</span>
        </a>
      </Link>
    </div>
  );
};

export default ReadNext;
