import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
   box-sizing: border-box;
   height: 100%;
  }

  body {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .g-image {
    max-width: 300px;
  }
`
