import React from "react"
import styled from "styled-components"

// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained (d) </h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;

  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 100px; /* adding height through the class is a good way to go */
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`

export default Images
