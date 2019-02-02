import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Hero = props => (
  <div
    style={{
      background: `red`,
      marginBottom: `1.45rem`,
      width: '100%',
      height: '45rem',
    }}
  >
    <div
     style={{
      color: 'white',
      width: '960px',
      margin: '0 auto',
    }}
    >
      <p style={{
        paddingTop: '279px',
      }}
      >{props.title} </p> 
    </div>
  </div>
) 

export default Hero
