import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import { ContentWrapper, StyledBackgroundSection } from "./styles"

const BackgroundSection = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "empresa/header-bg.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <ContentWrapper>
              <p>Content</p>
            </ContentWrapper>
          </BackgroundImage>
        )
      }}
    />
  )
}

export default StyledBackgroundSection
