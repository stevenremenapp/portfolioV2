import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <main style={{ flex: "1" }}>
          <About />
        </main>
      </Layout>
    );
  }
}

export default AboutPage;
