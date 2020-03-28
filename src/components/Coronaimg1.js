import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Images({ name }) {
  const data = useStaticQuery(graphql`
    query GET_IMAGE {
      corona1: file(relativePath: { eq: "corona1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data[name].childImageSharp.fluid} />
}
