import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

import Header from '../components/header'

import cover from '../images/hero-actv8me-dashboard.png'

const SecondPage = () => (
  <div>
    <Header />
    <Hero
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
        <h1
          style={{
            marginTop: `6rem`,
          }}
        >
          Mobii Application and System
        </h1>
        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
          Mobii is an application that delivers content through audio
          fingerprints, watermarks, geofences and beacons. Initially, I was
          tasked to redesign the iOS and Android platforms. Once completed, I
          then designed a lighter, fluid version built in React Native that
          would be easily digestable for clients.
        </p>

        <p
          style={{
            maxWidth: `540px`,
            margin: `1rem auto 0`,
            lineHeight: `1.6rem`,
          }}
        >
          During the processs I created user flows, wireframes and lo-fi and
          hi-fi design comps. Then I worked with the engineers and the VP of
          Product to get it built. To keep everything in sync I started building
          a design system, converted all styling to SASS variables so they were
          closer to elements I defined. But then I learned about design tokens.
          So I generated design tokens and applied them to the React project so
          we could white label rapidly and with minimal effort.
        </p>

        <h2
          style={{
            marginTop: `4rem`,
          }}
        >
          Tools
        </h2>

        <ul
          style={{
            listStyle: `none`,
            paddingLeft: `0`,
            marginLeft: `0`,
            lineHeight: `1.5rem`,
            textTransform: `uppercase`,
          }}
        >
          <li>
            <strong>version control:</strong> abstract + git
          </li>
          <li>
            <strong>design:</strong> sketch
          </li>
          <li>
            <strong>prototype:</strong> invision studio
          </li>
          
          <li>
            <strong>hand-off:</strong> invision
          </li>
          <li>
            <strong>code:</strong> react
          </li>
          <li>
            <strong>theming:</strong> sass + design tokens
          </li>
          <li>
            <strong>documentation:</strong> invision dsm
          </li>
        </ul>

        <h2
          style={{
            marginTop: `4rem`,
          }}
        >
        Design Ops
        </h2>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
        When I joined the project I saw that the team was using Photoshop for design, Dropbox for holding projects and printed booklets for stakeholder feedback and developer hand-off. I thought a new set of tools that I loved using might be better for us. So I worked to transfer the design tool of choice to Sketch and hand-off method using Zeplin, which we adopted. At some point someone made a mistake and overrode the main design file in Dropbox and we lost a significant chunk of work. I introduced our team to Abstract so that multiple could safely work
        </p>

        <h2
          style={{
            marginTop: `4rem`,
          }}
        >
        Emphasis on Content
        </h2>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
        The design I was assigned to attempt to improve utilized a list as the primary content delivery. I thought, and was later validated, that having so many items delivered at once was overwhelming and not conducive to nudging the user to the desired content.
        </p>

        <h2
          style={{
            marginTop: `2rem`,
          }}
        >
          Implementation
        </h2>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
          Clean up, prepare and organize flows in InVision, create tickets and
          attach the two together and hand-off. Responsible for making sure
          design is implemented as intended and work with developers to get 
          features to Production.
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
  </div>
)

export default SecondPage
