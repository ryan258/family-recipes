import React from "react"
import Seo from "../components/Seo"

import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

const Recipes = () => {
  return (
    <Layout>
      <Seo title="Recipes" description="Yummy, yummy secret family recipes." />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
