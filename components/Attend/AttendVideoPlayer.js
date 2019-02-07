import VideoPlayer from "../video-component/video"
import React from "react"
import styled from "styled-components"
import { Grid, Responsive, Item, Image } from "semantic-ui-react"
import _ from "lodash"

const LowerVideoPlayer = styled(VideoPlayer)`
  z-index: -20 !important;
`

const VideoListImage = styled(Image)`
  opacity: ${props => (props.isSelected ? "0.6" : "1")};
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
    <Grid columns={3} padded="vertically" textAlign="center">
      {props.videos.map((video, idx) => (
        <Grid.Column width={5}>
          <VideoListImage
            src={video.image}
            onClick={() => props.onSelectVideo(video)}
            size="medium"
            isSelected={video.id === props.activeVideo.id}
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
      videos2017: [],
      videos2019: [],
      activeVideo: null
    }
  }

  componentDidMount() {
    fetch("./static/attend-page/attendVideos2017.JSON")
      .then(res => res.json())
      .then(res => {
        console.log("VIDEOS: ", res)
        this.setState({ videos2017: res.videos, activeVideo: res.videos[0] })
      })
      .then(() =>
        fetch("./static/attend-page/attendVideos2019.JSON")
          .then(res => res.json())
          .then(res => {
            console.log("VIDEOS: ", res)
            if (res.videos.length !== 0) {
              this.setState({
                videos2019: res.videos,
                activeVideo: res.videos[0]
              })
            }
          })
          .then(() => {
            this.setState({ isLoaded: true })
          })
      )
      .then(() => {
        this.setState({ isLoaded: true })
      })
  }

  onSelectVideo = video => {
    this.setState({ activeVideo: video })
  }

  renderAttendVideoPlayer = () => {
    const { videos2017, videos2019, activeVideo } = this.state
    const { year } = this.props
    return (
      <div>
        {year === "2019" ? null : (
          <div>
            <LowerVideoPlayer video={activeVideo} minimal />
            <VideoList
              videos={videos2017}
              onSelectVideo={this.onSelectVideo}
              activeVideo={activeVideo}
            />
          </div>
        )}
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
