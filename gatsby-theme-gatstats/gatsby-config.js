const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gatstats",
    description:
      "A Gatsby blog dashboard theme for blog statistics and GitHub recent activity.",
    config: {
      sideBarWidth: 300,
    },
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/defaultLayout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.join(__dirname, `src/pages`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/posts",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src/pages`),
      },
    },
  ],
}
