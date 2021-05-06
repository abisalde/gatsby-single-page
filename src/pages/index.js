import * as React from "react"

import "../assets/css/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/about"
import Contact from "../containers/contact"
import Experience from "../containers/experience"
import Gallery from "../containers/gallery"
import Hero from "../containers/hero"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Contact />
    </Layout>
)

export default IndexPage
