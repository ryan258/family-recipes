/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Family Recipes",
    description: "A Recipe Site for Future Generations!",
    author: "@ryandotdev",
    person: {
      name: "manny",
      age: 21,
    },
    simpleData: ["critter 1", "critter 2", "critter 3"],
    complexData: [
      {
        name: "orson",
        age: 25,
      },
      {
        name: "búfalo",
        age: 30,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // { // we can get all the files like this
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `project`, // how it's named in graphql
    //     path: `${__dirname}/src`,
    //   },
    // },
    // but below, is leaner and you have less stuff to sift through
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // how it's named in graphql
        path: `${__dirname}/src/assets/images`, // the resource that our queries here will search in, but we can have multiple instance of this plugin
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cc1h6vqv10jj`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
}
