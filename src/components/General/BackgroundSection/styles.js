import styled from "styled-components"

export const ContentWrapper = styled.section`
  width: 100%;
  height: 590px;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 340px;
    margin-bottom: 0px;
  }

  @media (max-width: 500px) {
    img {
      max-width: 258px;
    }
    height: 470px;
  }
`

export const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
`
