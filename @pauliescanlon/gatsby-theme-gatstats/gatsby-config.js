const path = require('path')

module.exports = () => {
  return {
    siteMetadata: {
      title: '',
      description: '',
      keywords: [],
      siteURL: '',
      siteImage: '',
      config: {
        headerHeight: 64,
        sideBarWidth: 240,
        twitter: '',
        github: ''
      }
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-typescript',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: [`.mdx`, `.md`]
        }
      },
      {
        resolve: 'gatsby-plugin-layout',
        options: {
          component: require.resolve('./src/layouts/layout.tsx')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve(__dirname, `src/pages`)
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve(`src/pages`)
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve(`src/posts`)
        }
      }
    ]
  }
}
