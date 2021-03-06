import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  // console.log(data)
  return (
    <Layout>
      {/* here we can define the meta-title we want helmet to use */}
      <Seo
        title="About"
        description="Isn't it ABOUT time you backed up your family's flavor?"
      />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm critter coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring mysterious powder into bowl..."
            className="about-img" /* placed on the wrapper */
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Check Out These Recipes!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
