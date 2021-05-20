import React from "react"
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
          return (
            <Link to={`/${text}`} key={text}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
