const path = require("path")

module.exports = {
  siteMetadata: {
    logo: "logo",
    description:
      "A Gatsby blog dashboard theme for blog statistics and GitHub recent activity.",
    config: {
      sideBarWidth: 200,
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
          default: require.resolve("./src/templates/DefaultLayout.js"),
        },
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
        name: "posts",
        path: "src/posts",
      },
    },
  ],
}
