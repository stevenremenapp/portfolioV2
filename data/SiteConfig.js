const config = {
  siteTitle: "Steven Remenapp | An experiment in learning and publishing.", // Site title.
  siteTitleShort: "S. Remenapp", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Steven Remenapp | An experiment in learning and publishing.", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "An experiment in learning and publishing.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Steven Remenapp | An experiment in learning and publishing.", // Title of the RSS feed
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "MM-DD-YYYY", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: "Steven Remenapp", // Username to display in the author segment.
  userEmail: "remenapp@gmail.com", // Email used for RSS feed's author segment
  // userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Detroit, MI", // User location to display in the author segment.
  userAvatar: "/img/evieAndI.png", // User avatar to display in the author segment.
  userDescription:
    "I'm a front end developer, and I'm making this site to push myself to learn and share more publicly. This site will be changing frequently, so keep checking back in.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/stevenremenapp",
      iconClassName: "fa fa-github",
      targetBlank: true
    },
    // {
    //   label: "Twitter",
    //   url: "https://twitter.com/Vagr9K",
    //   iconClassName: "fa fa-twitter"
    // },
    {
      label: "Email",
      url: "mailto:remenapp@gmail.com",
      iconClassName: "fa fa-envelope",
      targetBlank: false
    }
  ],
  copyright: "Copyright © 2020, Steven Remenapp", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
