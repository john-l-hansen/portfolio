import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

import Header from '../components/header'

import cover from '../images/img-cover.jpg'

const SecondPage = () => (
  <>
  <Header />
  <Hero
  title="ACTV8ME DASHBOARD"
  image={require('../images/img-cover.jpg')}
  />
  
  <Layout>
    <SEO title="Page two" />
    <h1>About</h1>
    <p
    style={{
      maxWidth: `540px`,
    }}
    >Design a dashboard that would not only manage the new version of the Mobii application and it's accompanying features, but also all clients that work with actv8me. It was (is) a really fun project with some interesting challenges. I'm currently working on Atomically breaking down components, building a design library and designing for new features.</p>
    <p style={{
      
    }}>
    
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>

  </>
)

export default SecondPage
