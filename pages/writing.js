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
import { dummyData, scrollToTop } from "../helpers";

class Writing extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await axios.get(endpoints.blog);
    return { posts: posts.data };
  }
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts.items || dummyData(4) };
    this.showModal = this.showModal.bind(this);
    this.dismissModal = this.dismissModal.bind(this);
  }
  componentDidMount() {
    // fetch our posts
    this.fetchPosts();

    // if (typeof window !== "undefined") {
    //   scrollToTop(800);
    // }
  }
  fetchPosts() {
    axios.get(endpoints.blog).then(res => {
      this.setState({
        posts: res.data.items
      });
    });
  }
  showModal(e) {
    e.preventDefault();
    const { url } = this.props;
    Router.push(`${url.pathname}?contact=true`);
  }
  dismissModal() {
    const { url, photos } = this.props;
    Router.push(`${url.pathname}`);
  }
  render() {
    const { url } = this.props;
    return (
      <div className="blog">
        <Head />
        <Header showModal={this.showModal} />
        <Hero />
        {this.state.posts.length > 0 ? (
          <Posts
            posts={this.state.posts}
            layout="one-column"
            background={false}
          />
        ) : null}
        <EndOfList
        // page="/"
        // pageTitle="Drawings"
        // text="Maybe you'd like to check out some of my "
        />
        <ContactHOC url={url} dismissModal={this.dismissModal} />
        <Footer nav={nav} links={links} />
      </div>
    );
  }
}

export default Writing;
