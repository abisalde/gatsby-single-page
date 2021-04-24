import * as React from "react"

import "../assets/css/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../containers/hero"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
    </Layout>
)

export default IndexPage
