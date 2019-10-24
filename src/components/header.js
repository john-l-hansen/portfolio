import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">John Hansen</Link>
      <Link to="/">Work</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
      <Link to="/"><button>Contact</button></Link>
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
