import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

// everytime you create a page gatsby will automatically create a bunch of props
// const Testing = props => {
// console.log(props)
// - since we can destructure right away
const Testing = ({ data }) => {
  const author = data.site.info.author
  return (
    <Layout>
      <h2>testing</h2>
      <p>{author}</p>
    </Layout>
  )
}

// this query export will place the data in props as data
// - behind the scenes gatsby is smart enough to pick up on this export and put it in the props
export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        simpleData
        person {
          name
          age
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

export default Testing
