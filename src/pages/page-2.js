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
    >I helped the design and engineering team redesign the dashboard to improve the user experience, optimize existing features, and do so in a way that lays the foundation for future features. Working closely with the VP of Design, content creators and stakeholders, I collected and refined requirements, designed and prototyped solutions, created actionable tickets and followed them through to production.
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
      <li><strong>prototype:</strong> sketch + invision studio</li>
      <li><strong>hand-off:</strong> invision</li>
      <li><strong>code:</strong> angular material</li>
    </ul>
  
    <h2 style={{
      marginTop: `4rem`,
    }}>User Research</h2>
    <p
    style={{
      maxWidth: `540px`,
      margin: `0 auto`,
      lineHeight: `1.6rem`,
    }}
    >The business team was helpful by letting me know what was needed and the content team helped identify some of the pain points that were currently implemented. Combining the two gave me a sense of what the MVP user interface needed.
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
    >Furthering my knowledge and implementing of Sketch components, overrides and styles. On a level, it felt like I was designing for a designer and that was peculiar and refreshing to me.
    </p>
    
    <Link to="/">Back</Link>
    </div>
  </Layout>

  </>
)

export default SecondPage
