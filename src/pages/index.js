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


    <div style={{
      width: `640px`,
      margin: `5rem auto 0 auto`,
      textAlign: `center`,
    }}>
    <h2>Primary Work</h2>

    <p>A collection of some of my recent work.</p>
    </div>
    
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: `5rem`,
      }}
    >
      <Link to="/mobii/">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </Link>

      <Link to="/actv8me-dashboard">
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      </Link>

      <Link to="/actv8me-branding/">
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      </Link>

      <Link to="/ettika/">
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      </Link>

      <Link to="/oubly-dashboard/">
      <Img fluid={props.data.imageFive.childImageSharp.fluid} />
      </Link>

      <Link to="/oubly-product">
      <Img fluid={props.data.imageSix.childImageSharp.fluid} />
      </Link>

    </div>
    <div style={{
      marginTop: `5rem`,
      width: `640px`,
      margin: `5rem auto`,
    }}>
    <h2>About Me</h2>

    <p>I love to draw. In school it was a challenge for me to focus on the current topic and not draw. I also love computers. in elementary school I became a minor celebrity for making pixel art wallpapers. When I got my first computer I loved digging around in DOS. It fascinated me how you could manipulate the machine through textual commands, a fascination which would reignite later when I would discover HTML, CSS and JavaScript. I knew I wanted to be in art and technology somehow.</p>

    <p>
    However, I struggled with how to get there; I was not very good at nor did I enjoy the traditional art classes I was taking. I started floundering in high school and lost hope on pursuing art. Looking for direction and always having had a desire to join the military I enlisted in the Navy. Doing well in the Navy I came to a crossroads: stay in and go for a commission or leave and utilize the GI Bill for art school - I chose the latter.
    </p>

    <p>
    Having a passion for gaming, I initially started studying game design. One of my classmates that I often studied with told me about her program, graphic design. I asked about it and she told me how it was about branding, typography, web and all the goodness. My heart leapt, I didn't know this was a thing. I immediately changed my focus to design and it was exactly what I'd been looking for.
    </p>

    <p>
    After school I joined a startup and haven't stopped since! When not designing, I'll probably be gaming, cooking or playing guitar.
    </p>

    <h2>
    Tool Set
    </h2>

    <p>
    Although I dabble with myriad tools, I find myself using the following most:
    </p>

    <h2>Contact</h2>

    <p>
    Feel free to reach out for any reason.
    </p>


    {/* --------- FORM */}

    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/mobii/">Link Example</Link>
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
    imageOne: file(relativePath: { eq: "cover-mobii.png" }) {
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
