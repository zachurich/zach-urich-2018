import { SITE_LINKS, SITE_NAV, WRITING } from "../config";

import ContactHOC from "../components/ContactHOC";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import React from "react";
import { getPosts } from "../prismic-api";

class Writing extends React.Component {
  static async getInitialProps({ req }) {
    const res = await getPosts({ pageSize: 9 });
    return { posts: res.results };
  }
  render() {
    const { url } = this.props;
    return (
      <div className="blog pattern fade">
        <Head url={url} />
        <Header url={url} />
        <Hero title={WRITING.title} description={WRITING.subtitle} />
        {this.props.posts.length > 0 ? (
          <Posts posts={this.props.posts} layout="one-column" background={false} />
        ) : null}
        <ContactHOC url={url} />
        <Footer nav={SITE_NAV} links={SITE_LINKS} url={url} />
      </div>
    );
  }
}

export default Writing;
