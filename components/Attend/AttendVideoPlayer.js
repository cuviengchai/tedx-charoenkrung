import VideoPlayer from "../video-component/video"
import React from "react"
import styled from "styled-components"
import { Grid, Responsive, Item, Image } from "semantic-ui-react"
import _ from "lodash"

const LowerVideoPlayer = styled(VideoPlayer)`
  z-index: -20 !important;
`

const VideoListImage = styled(Image)`
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;
    -moz-transition: opacity 0.2s ease-in-out;
    -webkit-transition: opacity 0.2s ease-in-out;
  }
`

const VideoList = props => (
  <div>
    <Grid columns={4} padded="vertically" textAlign="center">
      {props.videos.map((video, idx) => (
        <Grid.Column width={4}>
          <VideoListImage
            src={video.image}
            onClick={() => props.onSelectVideo(video)}
            size="medium"
          />
        </Grid.Column>
      ))}
    </Grid>
  </div>
)

class AttendVideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      videos: [],
      activeVideo: null
    }
  }

  componentDidMount() {
    fetch("./static/attend-page/attendVideos.JSON")
      .then(res => res.json())
      .then(res => {
        console.log("VIDEOS: ", res)
        this.setState({ videos: res.videos, activeVideo: res.videos[0] })
      })
      .then(() => {
        this.setState({ isLoaded: true })
      })
  }

  onSelectVideo = video => {
    this.setState({ activeVideo: video })
  }

  renderAttendVideoPlayer = () => {
    const { videos, activeVideo } = this.state
    return (
      <div>
        <LowerVideoPlayer video={activeVideo} />
        <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
      </div>
    )
  }

  render() {
    return (
      <div>{this.state.isLoaded ? this.renderAttendVideoPlayer() : null}</div>
    )
  }
}

export default AttendVideoPlayer
