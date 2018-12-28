import React from "react"
import styled from "styled-components"
import { Grid, Responsive, Image } from "semantic-ui-react"

const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

const SpeakerImage = styled.img`
  width: inherit;
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

const SpeakerImageContainer = styled.div`
  width: inherit;
  height: inherit;
  &:hover ${Overlay} {
    bottom: 0;
    height: 100%;
  }
`
const SpeakerImageContainerMobile = styled.div`
  width: inherit;
  height: inherit;
  &:hover ${Overlay} {
    bottom: 0;
    height: 100%;
  }
`

const SpeakerContainer = styled.div`
  text-align: center;
  bottom: 0;
  height: auto;
  width: 90%;
  margin: 0 0 0 0;
`

const SpeakerName = styled.div`
  text-align: center;
`
const SpeakerHeader = styled.div`
  padding-top: 1em;
  padding-bottom: 4em;
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

const SpeakerDetailsMobile = styled.div`
  background-color: gray;
  opacity: 0.9;
  text-align: center;
  width: inherit;
  height: inherit;
`

class SpeakerItemMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.speaker, isActive: false }
  }
  render() {
    return (
      <div onClick={() => this.setState({ isActive: !this.state.isActive })}>
        {this.state.isActive ? (
          <SpeakerImage src={this.state.image} />
        ) : (
          <SpeakerDetailsMobile>{this.state.details}</SpeakerDetailsMobile>
        )}
      </div>
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
    fetch("./static/speakers/speakers.JSON")
      .then(res => res.json())
      .then(res => {
        this.setState({
          speakers: res
        })
      })
      .then(this.setState({ isLoaded: true }))
  }

  renderSpeakers() {
    console.log
    return (
      <SpeakerContainer>
        <Responsive maxWidth={1000}>
          <Grid columns={1} centered padded>
            {this.state.speakers.map((speaker, idx) => (
              <Grid.Column width={16}>
                <SpeakerItemMobile speaker={speaker} key={idx} />
              </Grid.Column>
            ))}
          </Grid>
        </Responsive>
        <Responsive minWidth={1001}>
          <Grid columns={4} stackable centered padded>
            {this.state.speakers.map((speaker, idx) => (
              <Grid.Column width={4}>
                <SpeakerItem speaker={speaker} key={idx} />
              </Grid.Column>
            ))}
          </Grid>
        </Responsive>
      </SpeakerContainer>
    )
  }

  render() {
    return (
      <div>
        <Image src="static/images/attend/Doers.png" size="large" />
        <SpeakerHeader>
          Our Speakers and Performers in TEDxCharoenkrung 2019
        </SpeakerHeader>
        {!this.state.isLoaded ? null : this.renderSpeakers()}
      </div>
    )
  }
}

export default Speakers
