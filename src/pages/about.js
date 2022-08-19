import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout pageTitle="About The Painting">
      <p> What will you like to know? Knowing more about the painting is classified information. Yes, it is! This is the new! This is the other new  
     <StaticImage src="https://placekitten.com/800/600" alt="A kitten" /></p>
    </Layout>
  )
}

export default AboutPage
