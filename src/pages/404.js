import React from "react"
import Seo from "../components/Seo"

import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <Seo
        title="404"
        description="These are not the droids you are looking for..."
      />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
