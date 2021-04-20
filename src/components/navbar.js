import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = () => {
    return (
        <nav>
            <AnchorLink
                to="#about"
                title="about"
                className="nav_links"
                stripHash
            >
                <span>About</span>
            </AnchorLink>
            <AnchorLink
                to="#experience"
                title="experience"
                className="nav_links"
                stripHash
            >
                <span>Experience</span>
            </AnchorLink>
            <AnchorLink
                to="#gallery"
                title="gallery"
                className="nav_links"
                stripHash
            >
                <span>Gallery</span>
            </AnchorLink>
            <AnchorLink
                to="#contact"
                title="contact"
                className="nav_links"
                stripHash
            >
                <span>Contact</span>
            </AnchorLink>
        </nav>
    )
}

export default Navbar
