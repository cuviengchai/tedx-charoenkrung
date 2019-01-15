import styled from "styled-components"

const ContainerBody = styled.div`
  height: 150px;
  width: 100%;
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  font-family: "Helvetica Neue";
  background-color: black;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "footer-icon footer-icon"
    "copyright contact";
  @media only screen and (max-width: ${props => props.width.mobile}) {
    height: 200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "footer-icon"
      "contact"
      "copyright";
  }
`
const FooterIcon = styled.div`
  padding: 1em 1em;
  grid-area: footer-icon;
  justify-self: start;
  align-self: start;
  img {
    height: auto;
    width: 200px;
  }
  @media only screen and (max-width: ${props => props.width.mobile}) {
    justify-self: start;
    align-self: start;
    text-align: left;
  }
`

const Contact = styled.div`
  padding: 1em 1em;
  grid-area: contact;
  justify-self: end;
  align-self: end;
  text-align: left;
  a {
    color: red !important;
  }
  @media only screen and (max-width: ${props => props.width.mobile}) {
    padding: 2em 0.5em 1em 1em;
    justify-self: start;
    align-self: start;
    text-align: left;
  }
`

const Copyright = styled.div`
  padding: 1em 1em;
  grid-area: copyright;
  justify-self: start;
  align-self: end;
  text-align: right;
  @media only screen and (max-width: ${props => props.width.mobile}) {
    padding: 0em 1em 1em 1em;
    justify-self: start;
    align-self: start;
    text-align: left;
  }
`

const width = {
  mobile: "1023px",
  desktop: "1024px"
}

const Footer = () => (
  <ContainerBody width={width}>
    <FooterIcon width={width}>
      <img src="static/images/logoWhite.png" />
    </FooterIcon>
    <Copyright width={width}>
      Copyright © TEDxCharoenkrung. All rights reserved.
    </Copyright>
    <Contact width={width}>
      Contact us via email at <a>team@tedxcharoenkrung.net</a>, or use our{" "}
      <a>contact form</a>.
    </Contact>
  </ContainerBody>
)
export default Footer
