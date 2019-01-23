import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <div
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      width: '100vw'

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
      
      <h1>actv8me Dashboard</h1>

      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
