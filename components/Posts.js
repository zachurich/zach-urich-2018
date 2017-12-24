import React from "react";
import Link from "next/link";

import Icon from "./Icon";
import Pencil from "../static/icon_pencil.svg";

const Posts = props => {
  const intro = props.intro;
  const background = props.background;
  const layout = props.layout;
  const postAmount = props.postAmount;
  const posts = props.posts.slice(0, postAmount);
  return (
    <section className={`projects wrapper ${background ? "background" : ""}`}>
      <div className="container">
        {intro ? (
          <div className="projects__heading heading">
            <Icon className="pencil" icon={Pencil} animate={true} />
            <h2 className="uppercase">Sometimes I Write Things...</h2>
          </div>
        ) : null}
        <div className="projects__list">
          {posts.map(post => {
            return (
              <div key={post.id} className={`project ${layout}`}>
                <div className="project__heading">
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
                    className="project__date uppercase"
                    style={post.date ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {post.date}
                  </span>
                </div>

                <div className="project__excerpt">
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
      </div>
    </section>
  );
};

export default Posts;
