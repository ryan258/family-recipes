import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"

const ImgGallery = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

// this query export will place the data in props as data
// - behind the scenes gatsby is smart enough to pick up on this export and put it in the props

export default ImgGallery
