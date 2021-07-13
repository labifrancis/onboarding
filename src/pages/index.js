import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="The Secret Painting">
      <p>This painting was missing for over 5000 years but Francis found it and hosted it on Gatsby cloud</p>
      <StaticImage
        alt="Francis in a Gallery in London"
        src="../images/francis.jpg"
      />
    </Layout>
  )
}

export default IndexPage