import React from "react";
import Router from "next/router";

import Head from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import ContactHOC from "../components/ContactHOC";

import axios from "axios";

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
      <div className="blog pattern fade">
        <Head url={url} />
        <Header url={url} />
        <Hero
          title="Sometimes I Write Things.."
          description="I write about things related to Software Development, design, and random philisophical thoughts."
        />
        {this.state.posts.length > 0 ? (
          <Posts
            posts={this.state.posts}
            layout="one-column"
            background={false}
          />
        ) : null}
        <ContactHOC url={url} />
        <Footer nav={nav} links={links} url={url} />
      </div>
    );
  }
}

export default Writing;
