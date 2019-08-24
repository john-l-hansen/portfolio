import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import "./button.css"



const Button = ({ action }) => (
  <div>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
    <button className="button-primary">
      {action}
    </button>
    </Link>
  </div>
)

Button.propTypes = {
  siteTitle: PropTypes.string,
}

export default Button