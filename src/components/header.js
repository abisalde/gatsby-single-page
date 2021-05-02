import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navbar from "./navbar/navbar"

const Header = ({ siteTitle }) => (
    <header
        style={{
            position: `absolute`,
            zIndex: `9`,
            marginTop: `1.325rem`,
            marginBottom: `1.45rem`,
            width: `100%`,
        }}
    >
        <div
            style={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
            }}
            className="wrapper"
        >
            <h1
                style={{
                    margin: 0,
                    fontFamily: `Agustina Signature`,
                    width: `100%`,
                }}
            >
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                        textShadow: `-5px 7px 17px rgba(106, 193, 191, 1)`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <Navbar />
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
