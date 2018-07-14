import React from "react";
import Router from "next/router";

import Head from "../components/Head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHOC from "../components/ContactHOC";
import ReadNext from "../components/ReadNext";
import SocialIcons from "../components/SocialIcons";

import axios from "axios";

import { endpoints, links, nav } from "../config";
import Link from "next/link";

class Post extends React.Component {
  state = {
    post: {},
    readNext: {}
  };

  static async getInitialProps({ req }) {
    const posts = await axios.get(endpoints.blog);
    return { posts: posts.data };
  }

  componentDidMount() {
    // If we have the post, go ahead and init state with data
    const post = this.pluckPost(this.props.posts.items)
      ? this.pluckPost(this.props.posts.items)
      : "";

    this.setState({ post, readNext: {} });
  }
  componentWillReceiveProps(nextProps) {
    const { slug } = this.props.url.query;

    if (slug == nextProps.url.query.slug) {
      this.fetchPosts();
    } else {
      // fade out old content, fade in new
      this.fetchPosts(true);
    }
  }
  componentWillMount() {
    this.fetchPosts();
  }
  // Grab a post for the ReadNext
  // Get the post by slug nabbed from route param
  pluckPost(posts) {
    const { url } = this.props;
    return posts.filter(post => post.slug === url.query.slug)[0];
  }
  // Get all the posts
  fetchPosts(animate) {
    const postBody =
      typeof document != "undefined"
        ? document.querySelector(".post__contain")
        : null;

    if (animate && postBody && typeof document != "undefined") {
      postBody.style.opacity = 0;
      setTimeout(() => {
        postBody.style.display = "none";
      }, 300);
    }

    return axios.get(endpoints.blog).then(res => {
      this.setState({
        post: this.pluckPost(res.data.items), // use our method to set state according to post we need
        readNext:
          res.data.items[
            res.data.items.indexOf(this.pluckPost(res.data.items)) + 1
          ]
      });
      if (animate && postBody && typeof document != "undefined") {
        postBody.style.display = "block";
        setTimeout(() => {
          postBody.style.opacity = 1;
        }, 300);
      }
    });
  }
  render() {
    const { url } = this.props;
    return (
      <div>
        <Head url={url} />
        <Header url={url} />
        <div className="post wrapper fade">
          {this.state.post ? (
            <div className="post__contain">
              <Hero title={this.state.post.title} date={this.state.post.date} />
              <div className="post__container">
                <div className="container">
                  <div
                    className="post__content"
                    dangerouslySetInnerHTML={{
                      __html: this.state.post.content
                    }}
                  />
                  {this.state.readNext ? (
                    <span>
                      <hr />
                      <div className="post__footer">
                        <ReadNext post={this.state.readNext} />
                        <SocialIcons
                          title={`"${this.state.post.title}"`}
                          url={`https://zachurich.com${url.asPath}`}
                        />
                      </div>
                    </span>
                  ) : (
                    <span>
                      <hr />
                      <div className="post__footer">
                        <SocialIcons
                          title={`"${this.state.post.title}"`}
                          url={`https://zachurich.com${url.asPath}`}
                        />
                      </div>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <Footer nav={nav} links={links} url={url} />
        <ContactHOC url={url} />
      </div>
    );
  }
}

export default Post;
