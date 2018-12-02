import { get } from "lodash";
import React from "react";
import { withRouter } from "next/router";

import Head from "../components/Head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHOC from "../components/ContactHOC";
import ReadNext from "../components/ReadNext";
import SocialIcons from "../components/SocialIcons";

import axios from "axios";

import { ENDPOINTS, SITE_LINKS, SITE_NAV } from "../config";
import { getPosts, getSinglePost } from "../prismic-api";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../prismic-api/helper";
import { formatDate, getRandomIndex } from "../helpers";

class Post extends React.Component {
  state = {
    post: this.props.post || {},
    date: this.props.date || "",
    uid: this.props.uid || "",
    readNext: null
  };

  static async getInitialProps({ query }) {
    const post = await getSinglePost({ uid: query.slug });
    return {
      post: post.data,
      date: post.data.date || post.first_publication_date,
      uid: post.uid
    };
  }

  async fetchReadNext() {
    const readNext = await getPosts({ pageSize: 10 });
    return readNext;
  }

  async fetchPost(uid) {
    const post = await getSinglePost({ uid });
    return post;
  }

  componentDidMount() {
    this.setReadNext();
  }
  componentWillReceiveProps(nextProps) {
    const { slug: currentSlug } = this.props.router.query;
    const { slug: newSlug } = nextProps.url.query;
    this.setPosts(newSlug);
    this.setReadNext();
  }

  animateOut() {
    let timeout;
    const postBody =
      typeof document != "undefined"
        ? document.querySelector(".post__contain")
        : null;

    if (postBody && typeof document != "undefined") {
      postBody.style.opacity = 0;
      timeout = new Promise(resolve =>
        setTimeout(() => {
          postBody.style.display = "none";
          resolve();
        }, 300)
      );
    }

    return timeout;
  }
  animateIn() {
    let timeout;
    const postBody =
      typeof document != "undefined"
        ? document.querySelector(".post__contain")
        : null;
    if (postBody && typeof document != "undefined") {
      postBody.style.display = "block";
      timeout = new Promise(resolve => {
        setTimeout(() => {
          postBody.style.opacity = 1;
          resolve();
        }, 700);
      });
    }

    return timeout;
  }
  setReadNext() {
    this.fetchReadNext().then(res => {
      const readNext = res.results.filter(post => post.uid != this.props.uid);
      this.setState({ readNext: getRandomIndex(readNext) });
    });
  }
  setPosts(newSlug) {
    let timeout;
    timeout = this.animateOut().then(() => {
      return this.fetchPost(newSlug).then(res => {
        this.setState({
          post: res.data,
          date: res.first_publication_date
        });
        this.animateIn();
      });
    });
  }
  render() {
    const { url } = this.props;
    const { post, readNext, date } = this.state;
    const title = get(post, "title[0].text");
    const body = get(post, "body");
    return (
      <div>
        <Head url={url} />
        <Header url={url} />
        <div className="post wrapper fade">
          {this.state.post ? (
            <div className="post__contain">
              <Hero title={title} date={formatDate(date)} />
              <div className="post__container">
                <div className="container">
                  {body && (
                    <div className="post__content">
                      {RichText.render(body, linkResolver)}
                    </div>
                  )}
                  {this.state.readNext ? (
                    <span>
                      <hr />
                      <div className="post__footer">
                        {readNext && (
                          <ReadNext
                            title={readNext.data.title[0].text}
                            uid={readNext.uid}
                          />
                        )}
                        <SocialIcons
                          title={`"${title}"`}
                          url={`https://zachurich.com${url.asPath}`}
                        />
                      </div>
                    </span>
                  ) : (
                    <span>
                      <hr />
                      <div className="post__footer">
                        <SocialIcons
                          title={`"${title}"`}
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
        <Footer nav={SITE_NAV} links={SITE_LINKS} url={url} />
        <ContactHOC url={url} />
      </div>
    );
  }
}

export default withRouter(Post);
