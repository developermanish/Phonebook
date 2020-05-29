import React from "react";
import App from "next/app";

import "../assets/css/style.css";
import "../components/dashboard/dashboard.css";
import "../components/search/search.css";


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const prop = {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : { bar: "foo" }
    };
    return prop;
  }

  componentDidMount() {
    // remove the ssr styles (if any)
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
