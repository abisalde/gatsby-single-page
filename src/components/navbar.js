import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = () => {
    return (
        <nav
            style={{
                display: `flex`,
                flexFlow: `row nowrap`,
                justifyContent: `flex-end`,
                width: `100%`,
            }}
        >
            <AnchorLink
                to="/#about"
                title="about"
                className="nav_links"
                stripHash
            >
                About
            </AnchorLink>
            <AnchorLink
                to="/#experience"
                title="experience"
                className="nav_links"
                stripHash
            >
                Experience
            </AnchorLink>
            <AnchorLink
                to="/#gallery"
                title="gallery"
                className="nav_links"
                stripHash
            >
                Gallery
            </AnchorLink>
            <AnchorLink
                to="/#contact"
                title="contact"
                className="nav_links"
                stripHash
            >
                Contact
            </AnchorLink>
        </nav>
    )
}

export default Navbar
