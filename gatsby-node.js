const path = require("path")
const slugify = require("slugify")
//! .createPages()
// similar to what we're doing in pages to makes a page for each recipe we're pulling in
// - but this approach is more explicit, as the other way has gatsby do a lot behind the scenes

// v this graphql returns a promise
exports.createPages = async ({ graphql, actions }) => {
  // 1. query - get nodes
  // 2. iterate over the nodes
  //   a. for each item create a new page
  const { createPage } = actions

  // v different syntax bc this is a node file
  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  console.log("################")
  console.log(result)
  console.log("################")

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        // here we have to set up 3 properties
        path: `/tags/${tagSlug}`, // path
        component: path.resolve(`src/templates/tag-template.js`), // component - we need the template
        context: {
          tag: tag,
        }, // context property where you pass in the variables
      })
    })
  })
}
