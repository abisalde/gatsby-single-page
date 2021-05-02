import React, { useState } from "react"
import NavbarLinks from "./navbarLinks"
import "./navbar.css"

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    return (
        <>
            <nav>
                <div
                    className="hamburger"
                    openNavbar={openNavbar}
                    onClick={() => setOpenNavbar(!openNavbar)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <NavbarLinks setOpenNavbar />
            </nav>
        </>
    )
}

export default Navbar
