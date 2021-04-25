import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const About = () => {
    return (
        <>
            <section id="about">
                <div className="wrapper">
                    <h3 className="heading">About</h3>
                    <div className="about_me">
                        <div className="intro"></div>
                        <div className="image">
                            <StaticImage
                                src=""
                                alt=""
                                formats={["auto", "webp", "avif"]}
                            />
                        </div>
                        <div className="hobbies"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
