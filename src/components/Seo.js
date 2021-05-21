import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[{ name: `description`, content: description }]}
    >
      {/* now we can add our meta information */}
    </Helmet>
  )
}

export default Seo
