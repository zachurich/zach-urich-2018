import Head from "next/head";
import ReactGA from "react-ga";

import stylesheet from "../styles/style.scss";

import { formatTitle } from "../helpers";

export default props => (
  <div>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-113781955-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
          }
        gtag('js', new Date());

        gtag('config', 'UA-113781955-1');`
        }}
      />
      <title>{`Zach Urich ${
        props.url ? formatTitle(props.url.asPath) : ""
      }`}</title>
      <meta name="author" content="Zach Urich" />
      <meta name="twitter:site" content="@zachurich" />
      <meta name="twitter:creator" content="@zachurich" />
      <meta property="twitter:title" content={props.title || "zachurich.com"} />
      <meta
        property="og:description"
        content={props.description || "Zach's Website"}
      />
      <meta
        property="twitter:description"
        content={props.description || "Zach's Website"}
      />
      <meta
        property="twitter:url"
        content={`https://zachurich.com${props.url.asPath}`}
      />
      <meta
        property="og:url"
        content={`https://zachurich.com${props.url.asPath}`}
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1"
      />
      <meta
        name="description"
        content="Zach Urich is a software engineer, designer, and wanabe cartoon artist."
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800|Montserrat:300,500,600,800,900"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
  </div>
);
