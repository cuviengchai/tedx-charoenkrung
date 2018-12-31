import React from "react"
import styled from "styled-components"
import { Grid, Responsive, Image } from "semantic-ui-react"

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
  opacity: 0.9;
  overflow: hidden;
  width: inherit;
  height: 0;
  transition: 0.5s ease;
`

const MobileOverlay = styled.div`
  position: absolute;
  // bottom: 100%;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0;
  overflow: hidden;
  width: inherit;
  height: inherit;
  transition: 0.5s ease;
`

const SpeakerImageContainer = styled.div`
  width: inherit;
  text-align: center;
  &:hover ${Overlay} {
    bottom: 0;
    height: 100%;
  }
`

const SpeakerContainer = styled.div`
  display: initial;
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
      isLoaded: false,
      speakers: []
    }
    this.renderSpeakers = this.renderSpeakers.bind(this)
  }
  componentDidMount(props) {
    fetch("./static/attend-page/speakers.JSON")
      .then(res => res.json())
      .then(res => {
        this.setState({
          speakers: res
        })
      })
      .then(this.setState({ isLoaded: true }))
  }

  renderSpeakers() {
    const { isMobile } = this.state
    return (
      <div>
        {/* <SpeakerContainerMobile> */}
        <Grid
          columns={2}
          centered
          padded
          padded="vertically"
          textAlign="center"
        >
          {this.state.speakers.map((speaker, idx) => (
            <Grid.Column width={8} centered textAlign="center">
              <SpeakerItemMobile speaker={speaker} key={"speaker-item" + idx} />
            </Grid.Column>
          ))}
        </Grid>

        {/* </SpeakerContainerMobile> */}
        <SpeakerContainer>
          <Grid
            columns={4}
            stackable
            centered
            padded
            padded="vertically"
            textAlign="center"
          >
            {this.state.speakers.map((speaker, idx) => (
              <Grid.Column width={4} key={"speaker-column" + idx}>
                <SpeakerItem speaker={speaker} key={"speaker-item" + idx} />
              </Grid.Column>
            ))}
          </Grid>
        </SpeakerContainer>
      </div>
    )
  }

  render() {
    return (
      <div>
        <SpeakerHeaderContent>
          <Image src="static/images/attend/Doers.png" size="large" />
          <SpeakerHeader>
            Our Speakers and Performers in TEDxCharoenkrung 2019
          </SpeakerHeader>
        </SpeakerHeaderContent>

        {!this.state.isLoaded ? null : this.renderSpeakers()}
      </div>
    )
  }
}

export default Speakers
