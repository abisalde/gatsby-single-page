import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <>
            <div
                style={{
                    position: `relative`,
                    display: `grid`,
                    minHeight: 760,
                }}
                className="hero"
            >
                <StaticImage
                    style={{ gridArea: `1/1`, minHeight: 750 }}
                    src="https://i.imgur.com/jBJwPf6.jpg"
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    aspectRatio={3 / 1}
                    layout="fullWidth"
                    alt="Hero_Omoyemi.com"
                />
                <div
                    style={{
                        gridArea: `1/1`,
                        display: `grid`,
                        position: "relative",
                    }}
                >
                    <h2>This is a test</h2>
                </div>
            </div>
        </>
    )
}

export default Hero
