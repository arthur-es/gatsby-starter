import styled from "styled-components"

export const Container = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : "#052c54")};
  div {
    img {
      width: 100%;
      max-width: 300px;
      height: auto;
    }

    .slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .carousel .slide {
    background: ${props => (props.bgColor ? props.bgColor : "#052c54")};
  }
`
