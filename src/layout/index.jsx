import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
// import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
        {/* <About /> */}
        {children}
        <Footer config={config} />
      </div>
    );
  }
}
