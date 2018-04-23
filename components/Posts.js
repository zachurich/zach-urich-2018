import React from "react";
import Link from "next/link";

import Icon from "./Icon";
import Pencil from "../static/icon_pencil.svg";

const Posts = props => {
  const { intro, background, layout, postAmount } = props;

  const posts = props.posts.slice(0, postAmount);
  return (
    <section className={`writing wrapper ${background ? "background" : ""}`}>
      <div className="container">
        {intro ? (
          <div className="writing__heading heading">
            {/* <Icon className="pencil" animate={true}>
              <Pencil />
            </Icon> */}
            <h2>Writing</h2>
          </div>
        ) : null}
        <div className="writing__list">
          {posts.map(post => {
            return (
              <div key={post.id} className={`writing-card ${layout}`}>
                <div className="writing-card__heading">
                  <Link
                    href={{ pathname: "/post", query: { slug: post.slug } }}
                    as={`/writing/${post.slug}`}
                    prefetch
                  >
                    <a>
                      <h3>{post.title}</h3>
                    </a>
                  </Link>
                  <span
                    className="writing-card__date uppercase"
                    style={post.date ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {post.date}
                  </span>
                </div>

                <div className="writing-card__excerpt">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt
                        ? post.excerpt.replace(" [&hellip;]", "...")
                        : ""
                    }}
                  />
                  {post.slug ? (
                    <Link
                      href={{ pathname: "/post", query: { slug: post.slug } }}
                      as={`/writing/${post.slug}`}
                      prefetch
                    >
                      <a>Read More</a>
                    </Link>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        {intro ? (
          <Link href="/writing" prefetch>
            <a className="button">View more</a>
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default Posts;
