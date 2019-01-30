import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ( props ) => (
  <div
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      width: '100%'

    }}
  >
    
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
