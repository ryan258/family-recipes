import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
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

const ComponentName = () => {
  // const data = useStaticQuery(getData)
  // we could also destructure it
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  // console.log(data)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h2>{title}</h2>
      {/* <div>
        {data.site.info.complexData.map((critter, index) => (
          <p key={index}>
            {critter.name} is {critter.age} years old
          </p>
        ))}
      </div> */}
    </div>
  )
}

export default ComponentName
