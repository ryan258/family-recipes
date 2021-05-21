import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import slugify from "slugify"

import Seo from "../components/Seo"
import Layout from "../components/Layout"

const RecipeTemplate = ({ data }) => {
  console.log(data)
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe

  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <div className="recipe-tags">
                Tags :{" "}
                {tags.map((tag, i) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={slug}>
                      {tag}
                    </Link>
                  )
                })}
              </div>
            </article>
          </section>
          {/* rest of content */}
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, i) => {
                return (
                  <div className="single-instruction" key={i}>
                    <header>
                      <p>Step {i + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((item, i) => {
                  return (
                    <p className="single-ingredient" key={i}>
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((item, i) => {
                  return (
                    <p className="single-tool" key={i}>
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

// again this query exports right to the props in the function above (AUTOMATICALLY)
// - but this time it takes an argument of a title to call up the appropriate data
// - ALSO when gatsby sets our pages programmatically, it actuall makes QUERY VARIABLES available
// -- by default it passes in the ID, and whatever field(s) you set up in a query

// we just have to make sure that we set up a query with a variable
//! then it becomes the "data" object
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      id
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
