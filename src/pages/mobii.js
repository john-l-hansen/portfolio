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
      <div
        style={{
          maxWidth: `540px`,
          margin: `0 auto`,
        }}
      >
        <h2
          style={{
            marginTop: `6rem`,
          }}
        >
          About
        </h2>
        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
        
        </p>

        <ul
          style={{
            listStyle: `none`,
            paddingLeft: `0`,
            marginLeft: `0`, 
            marginTop: `4rem`,
            lineHeight: `1.5rem`,
            textTransform: `uppercase`,
          }}
        >
          <li>
            <strong>versioning:</strong> abstract + github{' '}
          </li>
          <li>
            <strong>prototype:</strong> sketch + invision studio
          </li>
          <li>
            <strong>hand-off:</strong> invision
          </li>
          <li>
            <strong>code:</strong> angular material
          </li>
        </ul> 

        <h2
          style={{
            marginTop: `4rem`,
          }}
        >
          Process
        </h2>

        <h3
          style={{
            marginTop: `2rem`,
          }}
        >
          Organize   Requirements
        </h3>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
          Business wrote documentation on what they wanted and Engineering
          described what was currently implemented while Design had
          documentation sort of in between the two, including additional desired
          features. I took them all and identified what was implemented and what
          was needed.
        </p>

        <h3
          style={{
            marginTop: `2rem`,
          }}
        >
          User Inquiries
        </h3>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
          After knowing what was needed, I proceeded to ask questions and
          observe current users of the product to identify pain points. A few
          quickly surfaced - this gave my what was required for the project and
          places where I could improve User Experience.
        </p>

        <h3
          style={{
            marginTop: `2rem`,
          }}
        >
          User Flows
        </h3>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
          Creating user flows of features to visualize my new design
          ideas helped me check myself and was also extremely valuable as
          a sort of glimpse-map in future tickets for developers.
        </p>

        <h3
          style={{
            marginTop: `2rem`,
          }}
        >
          Protopying
        </h3>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
          User flows transformed into wireframes that I prototyped, using them
          to communicate my decisions in action to the design team. This was also
          another, <em>more intimate</em>, check on the logic and smoothness of the flow.
        </p>

        <h3
          style={{
            marginTop: `2rem`,
          }}
        >
          Visual Design
        </h3>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
        Create and apply color palette, typography and spatial relationships. To check again if I was suitably solving some of the pain points mentioned in user research, I refined prototypes and got feedback from the content team.
        </p>

        <h3
          style={{
            marginTop: `2rem`,
          }}
        >
          Implementation
        </h3>
     
        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
        Clean up, prepare and organize flows in InVision, create tickets and attach the two together and hand-off. Responsible for making sure design is implemented as intended and work with developers to get features to Production. 
        </p>

          
        <h2
          style={{
            marginTop: `4rem`,
          }}
        >
          Takeaways
        </h2>
        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
          Furthering my knowledge and implementing of Sketch components,
          overrides and styles. On a level, it felt like I was designing for a
          designer and that was peculiar and refreshing to me.
        </p>

        <Link to="/">Back</Link>
      </div>
    </Layout>
  </>
)

export default SecondPage
