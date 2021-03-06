import React from "react"
import Layout from "../components/Layout.js"
import Head from "next/head"
import styled from "styled-components"
import Slider from "react-slick"
import Router from 'next/router'
const Container = styled.div`
  .slick-prev {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: #DCDCDC;
    height: 30%;
    width: 10%;
    padding-left: 3%;
    margin-left: 0;
    opacity: 0.4;
    border-radius: 20%;
    z-index: 1;
  }
  .slick-next {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: #DCDCDC;
    height: 30%;
    width: 10%;
    padding-right: 3%;
    margin-right: 0;
    opacity: 0.4;
    border-radius: 20%;
    z-index: 1;
  }
  .slick-next:before, .slick-prev:before {
    font-size: 45px;
  }
`
const Desktop = styled.img`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
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
  background: white;
  height: 100%;
  padding: 5%;
  opacity: 0.9;
`

const settings = {
  dots: true,
  infinite: true,
  fade: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "slides",
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
class Home extends React.Component {
  selectAttend = () => {
    Router.push ({
      pathname: '/attend',
      query: { year: '2019' }
  })
  }
  render(){
    return (
        <Container>
          <Head>
            <title>Home</title>
          </Head>
          <Layout pageName="Home">
          <Slider {...settings}>
            <div>
              <Desktop src="static/images/HomeDesktop.png" />
            </div>
            <div>
              <Desktop src="static/images/DotsMatter.png" onClick = {() => this.selectAttend()}/>
            </div>
          </Slider>
          </Layout>
        </Container>
      )
  }
}
export default Home
