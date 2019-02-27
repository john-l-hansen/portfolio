import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

const Layout = ({ children }) => (
  <>
  
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer style={{
            margin: `0 auto`,
            width: `540px`,
            marginTop: `5rem`,
          }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
        </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
