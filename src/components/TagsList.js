import React from "react"
import slugify from "slugify"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

const TagsList = ({ recipes }) => {
  // console.log(recipes)
  const newTags = setupTags(recipes)
  // console.log(newTags)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, i) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={slug}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
