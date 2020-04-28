import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"

import { Wrapper } from "./styles"
import { GlobalStyle } from "../../styles/global"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer />
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
