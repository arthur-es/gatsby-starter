import React from "react"
import PropTypes from "prop-types"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import img1 from "../../assets/images/home/IMG_0053.png"
import img2 from "../../assets/images/home/IMG_0001.png"
import img3 from "../../assets/images/home/IMG_0005.png"
import img4 from "../../assets/images/home/IMG_0008.png"
import img5 from "../../assets/images/home/IMG_0010.png"
import img6 from "../../assets/images/home/IMG_0011.png"
import img7 from "../../assets/images/home/IMG_0016.png"
import img8 from "../../assets/images/home/IMG_0020.png"
import img9 from "../../assets/images/home/IMG_0027.png"
import img10 from "../../assets/images/home/IMG_0034.png"
import img11 from "../../assets/images/home/IMG_0037.png"
import img12 from "../../assets/images/home/IMG_0049.png"

import { Container } from "./styles"

export default function Slider({ bgColor, fullScreen }) {
  return (
    <Container fullScreen={fullScreen} bgColor={bgColor}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        emulateTouch
        centerMode
        autoPlay
        showArrows
        showIndicators={!fullScreen}
      >
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div>
          <img src={img7} alt="" />
        </div>
        <div>
          <img src={img8} alt="" />
        </div>
        <div>
          <img src={img9} alt="" />
        </div>
        <div>
          <img src={img10} alt="" />
        </div>
        <div>
          <img src={img11} alt="" />
        </div>
        <div>
          <img src={img12} alt="" />
        </div>
      </Carousel>
    </Container>
  )
}

Slider.propTypes = {
  fullScreen: PropTypes.bool,
  bgColor: PropTypes.string,
}

Slider.defaultProps = {
  fullScreen: true,
  bgColor: "",
}
