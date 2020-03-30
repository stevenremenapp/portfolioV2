import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import About from "../components/About/About";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

class Listing extends React.Component {
  renderPaging() {
    const { pageContext } = this.props;
    const prevPage = pageContext.currentPageNum - 1 === 1 ? "/" : `/${pageContext.currentPageNum - 1}/`;
    const nextPage = `/${pageContext.currentPageNum + 1}/`;
    const isFirstPage = pageContext.currentPageNum === 1;
    const isLastPage = pageContext.currentPageNum === pageContext.pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageContext.pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <Layout>
        {/* About here so it can show up on the main page also */}
        <About />
        <div className="listing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <div>
              <h1>TIL</h1>
              <p>I&apos;m using this site to document the things I&apos;m learning through public notetaking.</p>
            </div>
            <PostListing postEdges={data.allMarkdownRemark.edges} />
          </div>
          {this.renderPaging()}
        </div>
      </Layout>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
