const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/layout.tsx')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, `src/pages`)
        // path: "src/pages",
      }
    }
  ]
}
