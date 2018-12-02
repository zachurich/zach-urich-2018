import React from "react";
import Link from "next/link";
import PostCard from "./PostCard";
import { formatDate } from "../helpers";

const Posts = props => {
  const { intro = null, background = null, layout, postAmount = 4 } = props;
  const posts = props.posts.slice(0, postAmount);
  return (
    <section className={`writing wrapper ${background ? "background" : ""}`}>
      <div className="container">
        {intro && (
          <div className="writing__heading heading">
            <h2>Writing</h2>
          </div>
        )}
        <div className="writing__list">
          {posts.map(post => {
            const { id, data, uid: path, first_publication_date: date } = post;
            const content = {
              title: data.title,
              body: data.body,
              excerpt: data.excerpt
            };
            return (
              <PostCard
                key={id}
                id={id}
                path={path}
                date={formatDate(data.date || date)}
                layout={layout}
                {...content}
              />
            );
          })}
        </div>
        {intro && (
          <Link href="/writing" prefetch>
            <a className="button">View more</a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Posts;
