import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

import Header from '../components/header'

const SecondPage = () => (
  <>

  <Header />
  <Hero
  title="A Hero of Sorts 1"
  background={required('../images/cover-dashboard.png')}
  />

  
  <Layout>
  
    <SEO title="Page two" />
    
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  </>
)

export default SecondPage
