import styled from "styled-components"

export const SiteFooter = styled.footer`
  width: 100%;
  max-width: none;

  img {
    margin-bottom: 0px;
  }

  a {
    text-decoration: none;
    color: #334148;

    svg {
      position: relative;
      top: 4px;
      right: 4px;
    }

    &:hover {
      color: #3197e4;
    }
  }
`

export const FooterTop = styled.div`
  background-color: #f6f8fa;

  div.contato {
    display: flex;
    flex-direction: column;
  }

  div.siga {
    p {
      margin-right: 14px;
      margin-bottom: 0px;
    }

    a + a {
      margin-left: 4px;
    }

    display: flex;
    align-items: flex-start;
  }
`

export const WrapperTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1250px) {
    padding: 0 20px;
  }

  @media (max-width: 890px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    height: fit-content;
    padding: 20px 0px 20px 20px;

    div.contato {
      margin: 10px 0px 40px 0px;
    }
  }
  @media (max-width: 500px) {
    img {
      max-width: 90%;
    }
  }
`

export const FooterBottom = styled.div`
  background-color: #e9edf0;
  padding: 5px;
  p {
    margin: 0px;
    color: #334148;
    font-size: 16px;
  }
`

export const WrapperBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 62px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .copyright-mobile {
    display: none;
  }

  span {
    img {
      width: 17px;
      margin-left: 2px;
    }
  }
  img {
    margin: 0px;
    margin-left: 8px;
    margin-bottom: -2px;
  }

  @media (max-width: 1250px) {
    padding: 0 20px;
  }

  @media (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
    height: 70px;
  }

  @media (max-width: 670px) {
    .copyright-desktop {
      display: none;
    }
    .copyright-mobile {
      display: flex;
    }

    height: fit-content;
    padding: 20px 0px 20px 20px;
    align-items: flex-start;

    p {
      margin-bottom: 50px;
    }
  }
`
