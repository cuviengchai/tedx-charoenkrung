import React from "react"
import Layout from "../components/Layout.js"
import Head from "next/head"
import styled from "styled-components"
import Slider from "react-slick"
import { Icon } from "semantic-ui-react"
const Container = styled.div`
  .slick-prev {
    float: left;
    align-items: center;
    background: black;
    height: 30%;
    padding: 5%;
    opacity: 0.9;
    border-radius: 20%;
    z-index: 1;
  }
  .slick-next {
    display: flex;
    align-items: center;
    background: black;
    height: 30%;
    padding: 5%;
    opacity: 0.9;
    border-radius: 20%;
    z-index: 1;
  }
`
const Desktop = styled.img`
  display: flex;
  padding-top: 30px;
  width: 100%;
  @media only screen and (max-width: 425px) {
    display: none;
  }
`
const Mobile = styled.img`
  display: none;
  @media only screen and (max-width: 425px) {
    display: flex;
    padding-top: 15px;
    width: 425px;
  }
`
const Arrow = styled.div`
  display: flex;
  align-items: center;
  background: black;
  height: 100%;
  padding: 5%;
  opacity: 0.9;
`

const settings = {
  infinite: true,
  fade: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "slides"
}

function SamplePrevArrow(props) {
  const { className, onClick } = props
  return <Arrow className={className} onClick={onClick} />
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <Arrow
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  )
}

{
  /* <Mobile src="static/images/HomeMobile.png" /> */
}
export default () => (
  <Container>
    <Layout pageName="Home" />
    {/* <Desktop src="static/images/HomeDesktop.png" />
    <Mobile src="static/images/HomeMobile.png" /> */}
    <Slider {...settings}>
      <div>
        <Desktop src="static/images/HomeDesktop.png" />
      </div>
      <div>
        <Desktop src="static/images/HomeDesktop.png" />
      </div>
      <div>
        <Desktop src="static/images/HomeDesktop.png" />
      </div>
      <div>
        <Desktop src="static/images/HomeDesktop.png" />
      </div>
      <div>
        <Desktop src="static/images/HomeDesktop.png" />
      </div>
      <div>
        <Desktop src="static/images/HomeDesktop.png" />
      </div>
    </Slider>

    <Head>
      <title>Home</title>
    </Head>
  </Container>
)
