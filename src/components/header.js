import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'


const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `white`,
      boxShadow: `0 5px 15px #eaeaea`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ 
        margin: 0,
        textAlign: `center`,
      }}>
        <Link
          to="/"
          style={{
            textAlign: `center`,
            color: `#000000`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `John Hansen`,
}

export default Header
