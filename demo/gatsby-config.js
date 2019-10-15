/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gat Stats",
    description: "Data viz for blogs",
    config: {
      sideBarWidth: 250,
    },
  },
  plugins: ["gatsby-theme-gatstats"],
}
