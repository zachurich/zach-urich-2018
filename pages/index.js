import React from "react";
import axios from "axios";
import xssFilters from "xss-filters";

import Head from "../components/Head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Status from "../components/Status";
import Projects from "../components/Projects";
import Posts from "../components/Posts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { endpoints, links, nav, about } from "../config";
import { dummyData } from "../helpers";

import projects from "../projects.json";

export default class Landing extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await axios.get(endpoints.blog);
    return { posts: posts.data };
  }
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts.items || dummyData(4) };
  }
  componentDidMount() {
    if (this.state.posts.length < 1) {
      this.fetchPosts();
    }
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
      <div className="fade">
        <Head url={url} />
        <Header />
        <div className="pattern-background">
          <Intro />
          <Status content={about} />
        </div>
        <Projects projects={projects} />
        <Posts
          intro={true}
          posts={this.state.posts}
          postAmount={4}
          layout="two-column"
          background={true}
        />

        <div className="pattern-background">
          <Contact />
          <Footer nav={nav} links={links} />
        </div>
      </div>
    );
  }
}
