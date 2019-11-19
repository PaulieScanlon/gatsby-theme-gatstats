const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'GatStats',
    description: 'This is a demo for @pauliescanlon/gatsby-theme-gatstats',
    keywords: ['GatsbyJs', 'React', 'theme-ui'],
    config: {
      headerHeight: 64,
      sideBarWidth: 240
    }
  },
  plugins: ['@pauliescanlon/gatsby-theme-gatstats']
}
