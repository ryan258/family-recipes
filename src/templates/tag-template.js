import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
// these are still pages so we can access all the props
const TagTemplate = ({ data, pageContext }) => {
  // console.log(props) // we see pageContext: {tag: "food"} from gatsby-node, now we set up a graphql query using that pageContext's tag to grab an array of matching recipes
  //! so now we'll destructure that data out
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo
        title={pageContext.tag}
        description={`Congrats! You've found the secret stash of family ${pageContext.tag} recipes!`}
      />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
// then if you checkout props again you'll see we have access to the data

export default TagTemplate
