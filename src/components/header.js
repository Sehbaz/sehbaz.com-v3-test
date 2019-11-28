import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `#333 `,
      marginBottom: `1.45rem`,
      position: `sticky`,
      top: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,

        padding: `1rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Sehbaz
        </Link>
      </h5>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/work"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Work
        </Link>
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
