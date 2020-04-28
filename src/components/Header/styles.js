import styled from "styled-components"

export const SiteHeader = styled.header`
  padding-top: 20px;
  width: 100%;
  color: #052c54;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #052c54;
    font-weight: 600;

    &:hover {
      color: #3197e4;
    }
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1250px) {
    padding: 0 20px;
  }
`
export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 0px;

  img {
    margin-bottom: 0px;
    margin-right: 15px;
    margin-top: 3px;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0px;

    li {
      margin-bottom: 0px;
      margin-left: 25px;
    }
  }

  @media (max-width: 810px) {
    ul {
      display: none;
    }

    img {
      margin-bottom: 10px;
    }
  }
`
export const Right = styled.div`
  .menu-mobile-button {
    display: none;
  }

  display: flex;

  a {
    width: 130px;
    margin: 0px;
    margin-top: 6px;
  }

  svg {
    position: relative;
    top: 5px;
    left: 4px;
  }

  button {
    background-color: transparent;
    color: #052c54;
    border: none;
    outline: none;
    padding: 0px;
  }

  @media (max-width: 730px) {
    a {
      width: 130px;
      margin: 0px;
      margin-top: 3px;
    }
    .menu-mobile-button {
      display: flex;

      margin: 0px;

      svg {
        margin: 0px;
        margin-left: 15px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 500px) {
    #fale-conosco-desktop {
      display: none;
    }
  }

  @media (max-width: 480px) {
  }

  .menu-mobile {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    background-color: #ffffff;
    color: white;
    overflow-x: hidden;
    opacity: 0;
    transition: opacity 0.5s linear 1s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    padding: 20px;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0px;
      font-size: 28px;
      text-align: right;
      color: #052c54;

      li {
        img {
          margin-bottom: 20px;
        }

        a {
          text-decoration: none;
          color: #052c54;
          &:hover {
            color: #4aa4e7;
          }
        }
      }

      li + li {
        margin-top: 13px;
      }
    }
  }
`
