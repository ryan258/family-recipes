const setupTags = recipes => {
  // console.log("setting up tags!")
  const allTags = {}
  // iterate over recipes
  recipes.forEach(recipe => {
    // iterate over each recipe's tags
    recipe.content.tags.forEach(tag => {
      // console.log(tag)
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  // console.log(allTags)
  // return [property, value] in an array
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag) // compares 2 strings
  })
  // console.log(newTags) // we see we have an array of arrays, sorted
  return newTags
}

export default setupTags
