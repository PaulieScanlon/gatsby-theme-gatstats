const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gat Stats',
    description: 'Data viz for blogs',
    config: {
      sideBarWidth: 244
    }
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/templates/layout.tsx')
      }
    },
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve('./src/templates/layout.tsx')
    //     }
    //   }
    // },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        // path: path.join(__dirname, `src/pages`)
        path: 'src/pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        // path: path.join(__dirname, `src/pages`)
        path: 'src/pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        // path: path.join(__dirname, `src/posts`)
        path: 'src/posts'
      }
    }
  ]
}
