import React from "react"
import styled from "styled-components"
import { Grid, Image } from "semantic-ui-react"
const fetch = require("node-fetch")

const Text = styled.div`
  color: white !important;

  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Helvetica Neue";
`

const SpeakerImage = styled.img`
  width: 100%;
  height: auto;
`

const Overlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #db2828;
  ocity: 0.9;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
`

const MobileOverlay = styled.div`
  position: absolute;
  background-color: gray;
  opacity: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
`

const SpeakerImageContainer = styled.div`
  position: relative;
  // max-width: 300px;  
  display: block;
  width: 100%;
  text-align: center;
  overflow: auto;
  @media only screen and (min-width: 1024px) {
    &:hover ${Overlay} {
      bottom: 0;
      height: 100%;
  }

`

const SpeakerItemContainer = styled.div`
  text-align: center;
  width: ;
`

const SpeakerContainer = styled.div`
  display: block;
  text-align: center;
  bottom: 0;
  height: auto;
  margin: 0 0 !important;
  width: 100%;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`
const SpeakerContainerMobile = styled.div`
  display: none;
  // text-align: center;
  bottom: 0;
  height: auto;
  margin: 0 0 !important;
  width: 100%;
  @media only screen and (max-width: 1023px) {
    display: initial;
    ${MobileOverlay} {
      top: 0;
      bottom: 0;
      opacity: ${props => (props.isActive === true ? "0.9" : " 0")};
    }
  }
`
const SpeakerName = styled.div`
  text-align: center;
  font-family: "Helvetica Neue";
  @media only screen and (max-width: 1023px) {
    font-size: 25px;
  }
`
const SpeakerHeader = styled.div`
  padding-top: 1em;
  padding-bottom: 4em;
  font-family: "Helvetica Neue";
`

const SpeakerDetailsMobile = styled.div`
  background-color: gray;
  color: white;
  text-align: center;
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue";
`
const SpeakerHeaderContent = styled.div`
  @media only screen and (max-width: 1023px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const SpeakerGrid = styled.div`
  display: grid;
  margin-bottom: 10px;
  padding-bottom: 10px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`

const SpeakerGridMobile = styled.div`
  display: grid;
  margin-bottom: 10px;
  padding-bottom: 10px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`

const SpeakerItem = props => {
  let { eng_name, thai_name, image, details } = props.speaker
  return (
    <SpeakerContainer>
      <SpeakerImageContainer>
        <SpeakerImage src={image} />
        <Overlay>
          <Text>{details}</Text>
        </Overlay>
      </SpeakerImageContainer>
      <SpeakerName>{eng_name}</SpeakerName>
      <SpeakerName>{thai_name}</SpeakerName>
    </SpeakerContainer>
  )
}

class SpeakerItemMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.speaker, isActive: false, isMobile: props.isMobile }
  }
  onClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }
  render() {
    return (
      <SpeakerContainerMobile
        onClick={this.onClick}
        isActive={this.state.isActive}
      >
        <SpeakerImageContainer>
          <SpeakerImage src={this.state.image} />
          <MobileOverlay>
            <Text>{this.state.details}</Text>
          </MobileOverlay>
        </SpeakerImageContainer>
        <SpeakerName>{this.state.eng_name}</SpeakerName>
        <SpeakerName>{this.state.thai_name}</SpeakerName>
      </SpeakerContainerMobile>
    )
  }
}

class Speakers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      isLoaded: false,
      speakers2017: [],
      speakers2019: [],
      year: props.year
    }
    this.renderSpeakers = this.renderSpeakers.bind(this)
  }
  componentDidMount() {
    this.fetchSpeakers(this.state.year)
  }

  fetchSpeakers = () => {
    const fileDir = [
      "./static/attend-page/speakers2017.JSON",
      "./static/attend-page/speakers2019.JSON"
    ]
    this.setState({ isLoaded: false })
    fetch("./static/attend-page/speakers2017.JSON")
      .then(res => res.json())
      .then(res => {
        this.setState({
          speakers2017: res
        })
      })
      .then(() => fetch("./static/attend-page/speakers2019.JSON"))
      .then(res => res.json())
      .then(res => {
        this.setState({
          speakers2019: res
        })
      })
      .then(() => {
        this.setState({ isLoaded: true })
        window.addEventListener("resize", this.onResize)
        this.onResize()
      })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
  }

  onResize = () => {
    this.setState({
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    })
  }

  renderSpeakers() {
    const { isLoaded, width, speakers2017, speakers2019 } = this.state
    if (!isLoaded) {
      return null
    }
    return (
      <div>
        {width <= 1023 ? (
          // <Grid
          //   columns={2}
          //   centered
          //   padded
          //   padded="vertically"
          //   textAlign="center"
          // >
          //   {speakers2017.map((speaker, idx) => (
          //     <Grid.Column width={8} centered textAlign="center">
          //       <SpeakerItemMobile
          //         speaker={speaker}
          //         key={"speaker-item" + idx}
          //       />
          //     </Grid.Column>
          //   ))}
          // </Grid>
          <SpeakerGridMobile>
            {speakers2017.map((speaker, idx) => (
              <SpeakerItemMobile speaker={speaker} key={"speaker-item" + idx} />
            ))}
          </SpeakerGridMobile>
        ) : (
          <SpeakerGrid>
            {speakers2017.map((speaker, idx) => (
              <SpeakerItem speaker={speaker} key={"speaker-item" + idx} />
            ))}
          </SpeakerGrid>
        )}
      </div>
    )
  }

  render() {
    const { year } = this.props
    return (
      <div>
        <SpeakerHeaderContent>
          <Image src="static/images/attend/Doers.png" size="large" />
          <SpeakerHeader>
            Our Speakers and Performers in TEDxCharoenkrung{" "}
            {year == "2017" ? "2017" : "2019"}
          </SpeakerHeader>
        </SpeakerHeaderContent>
        {year == "2017" ? (
          <div>{!this.state.isLoaded ? null : this.renderSpeakers()}</div>
        ) : null}
      </div>
    )
  }
}

export default Speakers
