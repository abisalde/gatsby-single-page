import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <>
            <div
                style={{
                    position: `relative`,
                    display: `grid`,
                    minHeight: 750,
                }}
                className="hero"
            >
                <StaticImage
                    style={{ gridArea: `1/1` }}
                    src="https://i.imgur.com/jBJwPf6.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    aspectRatio={3 / 1}
                    layout="fullWidth"
                    alt="Hero_Omoyemi.com"
                    zIndex={1}
                />
                <div
                    style={{
                        display: `grid`,
                        position: `relative`,
                        gridArea: `1/1`,
                        bottom: `0`,
                    }}
                    className="hero-text-contents"
                >
                    <div className="hero-intro" style={{ margin: `auto` }}>
                        <div className="hero-text">
                            <h2>Omoyemi....</h2>
                            <p>
                                Sociologist <span>+</span> Finance
                                <p>
                                    Welcome to my webpage portfolio, scrolldown
                                    for a mini tour of who I am and what I do;
                                </p>
                            </p>
                        </div>
                        <div className="hero-image">
                            <StaticImage
                                zIndex={999}
                                src="https://i.imgur.com"
                                formats={["AUTO", "WEBP", "AVIF"]}
                                quality={95}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
