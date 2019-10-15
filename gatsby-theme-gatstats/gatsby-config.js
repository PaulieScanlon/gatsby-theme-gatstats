const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gat Stats",
    description: "Data viz for blogs",
    config: {
      sideBarWidth: 250,
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
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: "src/pages",
        // path: path.join(__dirname, `src/pages`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages",
        // path: path.join(__dirname, `src/pages`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "src/posts",
        // path: path.join(__dirname, `src/posts`),
      },
    },
  ],
}
