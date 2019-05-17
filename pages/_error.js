import React from "react";
import Router from "next/router";
import axios from "axios";
import xssFilters from "xss-filters";

import Head from "../components/Head";
import Header from "../components/Header";
import FourOhFour from "../components/FourOhFour";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { ENDPOINTS, SITE_LINKS, SITE_NAV } from "../config";
import { dummyData } from "../helpers";

export default class Error extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await axios.get(ENDPOINTS.prismic);
    return { posts: posts.data };
  }
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts.items || dummyData(4) };
    this.showModal = this.showModal.bind(this);
    this.dismissModal = this.dismissModal.bind(this);
  }
  componentDidMount() {
    if (this.state.posts.length < 1) {
      this.fetchPosts();
    }
  }
  showModal(e) {
    e.preventDefault();
    const { url } = this.props;
    Router.push(`${url.pathname}?contact=true`);
  }
  dismissModal() {
    const { url } = this.props;
    Router.push(`${url.pathname}`);
  }
  fetchPosts() {
    axios.get(ENDPOINTS.prismic).then(res => {
      this.setState({
        posts: res.data.items
      });
    });
  }
  render() {
    const { url } = this.props;
    return (
      <div className="pattern-background">
        <Head />
        <Header showModal={this.showModal} />
        <FourOhFour url={url.pathname} />
        {url.query.contact && (
          <Contact
            id={url.query.contact}
            useModal={true}
            dismissModal={this.dismissModal}
          />
        )}
        <Footer nav={SITE_NAV} links={SITE_LINKS} />
      </div>
    );
  }
}
