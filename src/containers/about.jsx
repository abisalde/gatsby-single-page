import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const About = () => {
    return (
        <>
            <section id="about">
                <div className="wrapper">
                    <h3 className="heading">About</h3>
                    <div className="about_me">
                        <div className="image">
                            <StaticImage
                                src="https://i.imgur.com/"
                                alt=""
                                formats={["auto", "webp", "avif"]}
                            />
                        </div>
                        <div className="about-intro">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus tempore vero
                                blanditiis deserunt eveniet nisi illum quo
                                nostrum similique, dolorem ipsum culpa nam,
                                perspiciatis possimus cumque minus velit,
                                doloremque quae!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
