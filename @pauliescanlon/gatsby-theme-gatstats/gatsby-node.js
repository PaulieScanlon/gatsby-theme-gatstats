const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.icon ? value : `/posts${value}`
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { icon: { eq: null } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node, previous, next }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.join(__dirname, `src/layouts/post.tsx`),
      context: {
        id: node.id,
        prev: index === 0 ? null : previous,
        next: index === posts.length - 1 ? null : next
      }
    })
  })
}
