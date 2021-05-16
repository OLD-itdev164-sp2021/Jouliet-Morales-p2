import React from 'react';
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo }  from '../components/Seo';




const About = ({ data }) => {
  const { name, company } = data.site.siteMetadata.contact
  return (
    <Layout>
        <Seo title="About" />
        
          <h2> About Us</h2>
          <h3>Develop & Deploy</h3>
          <p>{`${company} was started by ${name} in 2021.`}</p>
          <p>{`At ${company} we just make blogs!`}</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

    </Layout>
  )
}

export default About


export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
        }
      }
    }
  }
`

