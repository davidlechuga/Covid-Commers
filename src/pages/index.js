import React from "react"
import { graphql } from "gatsby"
import { Jumbo,SEO, Products } from "../components"

export const query = graphql`
         query GET_DATA {
           allSite {
             edges {
               node {
                 siteMetadata {
                   title
                   description
                   author
                 }
               }
             }
           }
            allStripeSku {
              edges {
                node {
                  id
                  price
                  product {
                    name
                    metadata {
                      description
                      img
                    }
                  }
                }
              }
            }
         }
       `

const IndexPage = ({ data }) => {
  console.log(data);
  
  return(
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}>
      {" "}
      </Jumbo>
      <Products products={data.allStripeSku.edges} />
  </>
  )}

export default IndexPage
