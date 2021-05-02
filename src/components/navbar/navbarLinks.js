import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = () => {
    return (
        <ul
            style={{
                display: `flex`,
                flexFlow: `row nowrap`,
                justifyContent: `flex-end`,
                width: `100%`,
            }}
        >
            <li>
                <AnchorLink
                    to="/#about"
                    title="about"
                    className="nav_links"
                    stripHash
                >
                    About
                </AnchorLink>
            </li>
            <li>
                <AnchorLink
                    to="/#experience"
                    title="experience"
                    className="nav_links"
                    stripHash
                >
                    Experience
                </AnchorLink>
            </li>
            <li>
                <AnchorLink
                    to="/#gallery"
                    title="gallery"
                    className="nav_links"
                    stripHash
                >
                    Gallery
                </AnchorLink>
            </li>
            <li>
                <AnchorLink
                    to="/#contact"
                    title="contact"
                    className="nav_links"
                    stripHash
                >
                    Contact
                </AnchorLink>
            </li>
        </ul>
    )
}

export default Navbar
