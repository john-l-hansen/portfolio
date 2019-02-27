import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

import Header from '../components/header'

import cover from '../images/hero-actv8me-dashboard.png'

const SecondPage = () => (
  <>
  <Header />
  <Hero
  title="ACTV8ME DASHBOARD"
  image={require('../images/hero-actv8me-dashboard.png')}
  />
  
  <Layout>
    <SEO title="Page two" />
    <div style={{
      maxWidth: `540px`,
      margin: `0 auto`,
    }}>
    <h2 style={{
      marginTop: `6rem`,
    }}>About</h2>
    <p
    style={{
      maxWidth: `540px`,
      margin: `0 auto`,
      lineHeight: `1.6rem`,
    }}
    >I helped the design and engineering team redesign the product to improve the user experience, optimize existing features, and do so in a way that lays the foundation for future features. Working closely with the VP of Design and stakeholders, I collected and refined requirements, designed and prototyped solutions, and created actionable tickets.
    </p>

    <ul style={{
      listStyle: `none`,
      paddingLeft: `0`,
      marginLeft: `0`,
      marginTop: `4rem`,
      lineHeight: `1.5rem`,
      textTransform: `uppercase`,
    }}>
      <li><strong>versioning:</strong> abstract + github </li>
      <li><strong>design:</strong> sketch + invision studio</li>
      <li><strong>hand-off:</strong> invision</li>
      <li><strong>code:</strong> angular</li>
    </ul>

    <h2 style={{
      marginTop: `4rem`,
    }}>Process</h2>
    <p
    style={{
      maxWidth: `540px`,
      margin: `0 auto`,
      lineHeight: `1.6rem`,
    }}
    >I helped the design and engineering team redesign the product to improve the user experience, optimize existing features, and do so in a way that lays the foundation for future features. Working closely with the VP of Design and stakeholders, I collected and refined requirements, designed and prototyped solutions, and created actionable tickets.
    </p>

    <h2 style={{
      marginTop: `4rem`,
    }}>User Research</h2>
    <p
    style={{
      maxWidth: `540px`,
      margin: `0 auto`,
      lineHeight: `1.6rem`,
    }}
    >I helped the design and engineering team redesign the product to improve the user experience, optimize existing features, and do so in a way that lays the foundation for future features. Working closely with the VP of Design and stakeholders, I collected and refined requirements, designed and prototyped solutions, and created actionable tickets.
    </p>

    <h2 style={{
      marginTop: `4rem`,
    }}>Takeaways</h2>
    <p
    style={{
      maxWidth: `540px`,
      margin: `0 auto`,
      lineHeight: `1.6rem`,
    }}
    >I helped the design and engineering team redesign the product to improve the user experience, optimize existing features, and do so in a way that lays the foundation for future features. Working closely with the VP of Design and stakeholders, I collected and refined requirements, designed and prototyped solutions, and created actionable tickets.
    </p>
    
    <Link to="/">Back</Link>
    </div>
  </Layout>

  </>
)

export default SecondPage
