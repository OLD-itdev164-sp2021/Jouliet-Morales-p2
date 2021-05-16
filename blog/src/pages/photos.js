import React from "react"
import { Layout } from "../components/Layout"
import  { Seo } from "../components/Seo"

import { Link } from "gatsby"
import styled from "styled-components"
import { Box, Card, Image, Heading } from "rebass"



const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const SecondPage = ({ data }) => (
  <Layout>
    <Seo title="Page two" />
    <Grid>
      {data.allContentfulBlogPost.edges.map(edge => (
        <Card key={edge.node.id} width={256} p={3}>
          <Link to={edge.node.slug}>
            <Image src={edge.node.heroImage.fluid.src} alt="Hero" />
          </Link>
          <Heading>{edge.node.title}</Heading>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

export default SecondPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          heroImage {
            fluid(maxWidth: 600) {
              src
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`