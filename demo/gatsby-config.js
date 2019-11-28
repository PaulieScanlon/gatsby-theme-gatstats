const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Introducing GatStats',
    description: `GatStats is a dashboard for your tech blog, or a <i>dashblog</i> if you prefer? <br /> More here 👉 <a href='https://www.npmjs.com/package/@pauliescanlon/gatsby-theme-gatstats' target='_blank'>@pauliescanlon/gatsby-theme-gatstats</a>`,
    keywords: ['GatsbyJs', 'React', 'theme-ui'],
    siteURL: 'https://gatsby-theme-gatstats.netlify.com',
    siteImage: 'static/gatstats_1080x608.jpg',
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      twitter: 'pauliescanlon',
      github: 'pauliescanlon'
    }
  },
  plugins: ['@pauliescanlon/gatsby-theme-gatstats']
}
