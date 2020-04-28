import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <h1>NÃO ENCONTRADO</h1>
    <p>
      Você encontrou uma página que não existe{" "}
      <span role="img" aria-label="emoji">
        🤔🤔
      </span>
    </p>
  </Layout>
)

export default NotFoundPage
