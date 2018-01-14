import Head from "next/head";

import stylesheet from "../styles/style.scss";

import { formatTitle } from "../helpers";

export default props => (
  <div>
    <Head>
      <title>{`Zach Urich ${
        props.url ? formatTitle(props.url.asPath) : ""
      }`}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800|Montserrat:300,500,600,800,900"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
  </div>
);
