/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// TODO: write some articles first!
// const path = require(`path`)

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const ArticleLayout = path.resolve(`src/layouts/ArticleLayout.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: ArticleLayout,
//       context: {}, // additional data can be passed via context
//     })
//   })
// }