import * as React from "react"

import "../assets/css/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/about"
import Hero from "../containers/hero"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
    </Layout>
)

export default IndexPage
