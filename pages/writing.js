import React from "react";
import Router from "next/router";

import Head from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import EndOfList from "../components/EndOfList";
import Footer from "../components/Footer";
import ContactHOC from "../components/ContactHOC";

import axios from "axios";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { endpoints, links, nav } from "../config";
import { scrollToTop } from "../helpers";

class Writing extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await axios.get(endpoints.blog);
    return { posts: posts.data };
  }
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts.items || dummyData(4) };
  }
  componentDidMount() {
    // fetch our posts
    this.fetchPosts();
  }
  fetchPosts() {
    axios.get(endpoints.blog).then(res => {
      this.setState({
        posts: res.data.items
      });
    });
  }
  render() {
    const { url } = this.props;
    return (
      <div className="blog pattern pattern-background fade">
        <Head url={url} />
        <Header url={url} />
        <Hero />
        {this.state.posts.length > 0 ? (
          <Posts
            posts={this.state.posts}
            layout="one-column"
            background={false}
          />
        ) : null}
        <EndOfList />
        <ContactHOC url={url} />
        <Footer nav={nav} links={links} url={url} />
      </div>
    );
  }
}

export default Writing;
