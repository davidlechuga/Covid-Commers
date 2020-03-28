import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Images({ name }) {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          corona1: file(relativePath: { eq: "corona1.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data[name].childImageSharp.fluid} />}
    />
  )
}
