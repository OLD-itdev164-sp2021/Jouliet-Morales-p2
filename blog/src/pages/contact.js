import React from 'react';
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo }  from '../components/Seo';

const Contact = ({ data }) => {
  const { name, company, address } = data.site.siteMetadata.contact
  return (
    <Layout>
      <Seo title="Contact" />
      <h1>Contact Us</h1>
      <p>Please send all inquiries to: </p>
      <form name="contact" netlify>
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <div>{company}</div>
      <div>{`C/O ${name}`}</div>
      <div>{address}</div>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`
