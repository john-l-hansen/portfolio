import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = props => (
  <>
  <Header />

  <Layout>
    
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: `5rem`,
      }}
    >
      <Link to="/page-2/">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </Link>
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      <Img fluid={props.data.imageSix.childImageSharp.fluid} />
    </div>
    <div style={{
      marginTop: `5rem`,
    }}>
    <h1>Hi people</h1>
    <p>It all started when I was young.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/page-2/">Link Example</Link>
    </div>
  </Layout>
  </>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "cover-dashboard.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "cover-dashboard.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "cover-actv8me-branding.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "cover-ettika.jpg" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "cover-oubly-dashboard.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "cover-oubly.png" }) {
      ...fluidImage
    }
  }
`
