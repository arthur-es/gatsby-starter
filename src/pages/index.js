import React from "react"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Container } from "../styles/pages/index"
import { GatstbyImageWrapper } from "../styles/General/gatsbyImageWrapper.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: "300px" }}>
        <Image />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
