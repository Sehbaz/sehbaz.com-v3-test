import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: `sticky`,
      top: `0`,
      backgroundColor: `#fff`,
      borderBottom: `1px solid rgba(47, 54, 64,0.2)`,
      padding: `1rem 0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960`,
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
            textDecoration: `none`,
            color: `black`,
            fontSize: `1rem`,
          }}
        >
          Sehbaz
        </Link>
      </h5>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/work"
          style={{
            textDecoration: `none`,
            color: `black`,
            fontSize: `1rem`,
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
