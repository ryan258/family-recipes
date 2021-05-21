import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Home Page"
        description="This is the home page, your gateway to your family's recipes!"
      />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="huevos"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>family recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        {/* <FetchData /> */}
        <AllRecipes />
      </main>
    </Layout>
  )
}
