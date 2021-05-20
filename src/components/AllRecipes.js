import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

//! 1.) Get the query from graphQL's page query
const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        id
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
  //! 2.) Invoke to query
  const data = useStaticQuery(query)
  // console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)
  //! - or destructure in place, same result
  // const {
  //   allContentfulRecipe: { nodes: recipes },
  // } = useStaticQuery(query)
  // console.log(recipes)

  // then pass the recipes down through props
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
