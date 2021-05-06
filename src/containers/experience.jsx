import * as React from "react"
import { withPrefix, Link } from "gatsby"

import { Helmet } from "react-helmet"

const Experience = () => {
    return (
        <>
            <Helmet>
                <Link
                    href={withPrefix(
                        "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    )}
                    rel="stylesheet"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossorigin="anonymous"
                    type="text/css"
                />
            </Helmet>

            <section id="experience">
                <div className="wrapper">
                    <h3 className="heading">Experience</h3>

                    <div>
                        <i className="fab fa-500px"></i>
                        <i className="far fa-address-card"></i>
                        <i className="fal fa-album"></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience
