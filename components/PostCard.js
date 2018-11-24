import React from "react";
import Link from "next/link";

const PostCard = ({ title, body, excerpt, id, data, path, date, layout }) => {
  return (
    <div key={id} className={`writing-card ${layout}`}>
      <div className="writing-card__heading">
        <Link
          href={{ pathname: "/post", query: { slug: path } }}
          as={`/writing/${path}`}
          prefetch
        >
          <a>
            <h3>{title[0].text}</h3>
          </a>
        </Link>
        <span
          className="writing-card__date"
          style={date ? { opacity: 1 } : { opacity: 0 }}
        >
          {date}
        </span>
      </div>

      <div className="writing-card__excerpt">
        <p
          dangerouslySetInnerHTML={{
            __html: excerpt[0].text
          }}
        />

        <Link
          href={{ pathname: "/post", query: { slug: path } }}
          as={`/writing/${path}`}
          prefetch
        >
          <a>Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
