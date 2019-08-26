const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    let _path = ""

    if (node.frontmatter.icon) {
      _path = `${value}`
    } else {
      _path = `/posts${value}`
    }
    // console.log("value: ", value)

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "post" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: _path,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
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
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // We'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      // component: "/src/templates/PostLayout.js",
      component: path.join(__dirname, `src/templates/PostLayout.js`),
      // component: path.resolve(`./src/templates/PostLayout.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
