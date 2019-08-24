import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

import Header from '../components/header'

import Button from '../components/button'

const SecondPage = () => (
  <div>
    <Header />
    <Hero style={{
background: `linear-gradient(180deg, #3D5AFE 2.71%, #18FFFF 100%)`,
transform: `rotate(-180deg)`,

    }}
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
          ACTV8me Branding
        </h1>
        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
        I helped to define the corporate brand design and create a process through which to utilize it amongst the teams. I audited and solidified design elements and created guidance materials, and demonstrated these guidelines on a redesign and development of the corporate website.
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
            <strong>prototype:</strong> sketch
          </li>
          <li>
            <strong>hand-off:</strong> invision
          </li>
          <li>
            <strong>code:</strong> foundation
          </li>
        </ul>

        <Button action={'View Site'}></Button>

        <h2
          style={{
            marginTop: `4.5rem`,
          }}e>
          Distribute
        </h2>

        <p
          style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}
        >
     I worked closely with the Creative Director and the design team to establish branding guidelines and how to implement them.
        </p>

        <h2
          style={{
            marginTop: `4.5rem`,
          }}
        >                                                               
          Distribute
        </h2>

      <p
            style={{
            maxWidth: `540px`,
            margin: `0 auto`,
            lineHeight: `1.6rem`,
          }}>
          
        </p>

        <h2
          style={{
            marginTop: `4.5rem`,
          }}
        >
         Apply
        </h2>

        <p>
        While th design elements started to trickle through decks and marketing materials, the first and most publicly visible project to apply the new design decisions was a redesign of the corporate site. I worked with the our head of Business Development and CEO to design and dev
        </p>

        <Link to="/">Back</Link>

      </div>  
    </Layout>
  </div>
)

export default SecondPage
