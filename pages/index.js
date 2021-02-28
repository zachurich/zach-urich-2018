import { ABOUT_CONTENT, SITE_LINKS, SITE_NAV } from "../config";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Posts from "../components/Posts";
import Projects from "../components/Projects";
import React from "react";
import Status from "../components/Status";
import { getPosts } from "../prismic-api";
import projects from "../projects.json";

export default class Landing extends React.Component {
  static async getInitialProps({ req }) {
    const res = await getPosts({ pageSize: 5 });
    return { posts: res.results };
  }
  render() {
    const { url } = this.props;
    return (
      <div className="fade">
        <Head url={url} title="Zach Urich" />
        <Header />
        <div className="pattern-background">
          <Intro />
          <Status content={ABOUT_CONTENT} />
        </div>
        <Projects projects={projects} />
        <Posts
          intro={true}
          posts={this.props.posts}
          postAmount={4}
          layout="two-column"
          background={true}
        />

        <div className="pattern-background">
          <Contact />
          <Footer nav={SITE_NAV} links={SITE_LINKS} />
        </div>
      </div>
    );
  }
}
