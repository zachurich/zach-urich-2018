import React from "react";
import url from "url";

import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReadNext from "../components/ReadNext";

import axios from "axios";

import { endpoints, links, nav } from "../config";
import Link from "next/link";

import patternMobile from "../static/pattern-mobile.svg";

class Post extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await axios.get(endpoints.blog);
    return { posts: posts.data };
  }
  constructor(props) {
    super(props);

    // If we have the post, go ahead and init state with data
    const post = this.pluckPost(this.props.posts.items)
      ? this.pluckPost(this.props.posts.items)
      : "";

    this.state = { post, readNext: {} };
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      this.onRouteUpdated();
    }
  }
  componentWillMount() {
    this.fetchPosts();
  }
  onRouteUpdated() {
    this.fetchPosts().then(() =>
      document.querySelector(".post__heading").scrollIntoView()
    );
  }
  // Grab a post for the ReadNext
  // Get the post by slug nabbed from route param
  pluckPost(posts) {
    const { url } = this.props;
    return posts.filter(post => post.slug === url.query.slug)[0];
  }

  // Get all the posts
  fetchPosts() {
    return axios.get(endpoints.blog).then(res => {
      this.setState({
        post: this.pluckPost(res.data.items), // use our method to set state according to post we need
        readNext:
          res.data.items[Math.floor(Math.random() * res.data.items.length)]
      });
    });
  }
  render() {
    return (
      <div>
        <Head />
        <Header />
        <div className="post wrapper">
          {this.state.post ? (
            <div>
              <header
                className="post__heading"
                style={{
                  backgroundImage: `url(${patternMobile})`
                }}
              >
                <div className="container">
                  <h1 className="post__title">{this.state.post.title}</h1>
                  <span className="post__date">{this.state.post.date}</span>
                </div>
              </header>
              <div className="post__container">
                <div className="container">
                  <div
                    className="post__content"
                    dangerouslySetInnerHTML={{
                      __html: this.state.post.content
                    }}
                  />
                  {Object.keys(this.state.readNext).length !== 0 &&
                  this.state.readNext.slug !== this.state.post.slug ? (
                    <span>
                      <hr />
                      <div className="post__footer">
                        <ReadNext post={this.state.readNext} />
                      </div>
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
          <Footer nav={nav} links={links} />
        </div>
      </div>
    );
  }
}

export default Post;
