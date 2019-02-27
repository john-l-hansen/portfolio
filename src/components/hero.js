import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'


const Hero = props => (
  <div
  className=""
    style={{
      marginBottom: '1.45rem',
      width: '100%',
      height: '45rem',
      backgroundImage: `url(${props.image})`,
    }}
  >
  
    <div
     style={{
      color: 'white',
      width: '960px',
      margin: '0 auto',
    }}
    >
      <h1 style={{
        color: 'white',
        paddingTop: '279px',
        textAlign: `center`,
      }}
      >{props.title}</h1>
    </div>
  </div>
) 

export default Hero
