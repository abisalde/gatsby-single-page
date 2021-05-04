import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "../assets/css/navbar.css"

const Header = ({ siteTitle, menuLinks }) => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const handleClick = () => setOpenNavbar(!openNavbar)
    return (
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
                <nav>
                    <div
                        className={
                            openNavbar ? "hamburger active" : "hamburger"
                        }
                        onClick={handleClick}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul
                        className={
                            openNavbar ? "nav_display active" : "nav_display"
                        }
                        onClick={handleClick}
                    >
                        {menuLinks.map(link => (
                            <li key={link.name}>
                                <AnchorLink
                                    to={link.link}
                                    title={link.name}
                                    className="nav_links"
                                    stripHash
                                >
                                    {link.name}
                                </AnchorLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
