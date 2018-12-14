import React, { Component } from "react"
import Layout from "../components/Layout"
import { Grid, Responsive } from 'semantic-ui-react'
import VideoPlayer from '../components/video-component/video'
import VideoItemContainer from '../components/video-component/video-item-container'
import styled from 'styled-components'
import videoblog from '../content/video-page/videoblog.json'
const MyContainer = styled.div`
    display: flex;
    margin: 0rem 2rem;
    justify-content: center;
`

const { VideoList } = videoblog  
class VideoPlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: VideoList,
          selectedVideo: VideoList[0]
        };
      }
    render(){
        return (
            <Layout pageName="video" color='teal'>
                <Grid>
                    <Grid.Row>
                        {/* <h2 > { this.state.selectedVideo.title || "Loading..." } </h2> */}
                        <h2> Hello </h2>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                            <Grid.Column mobile={16} tablet={16} computer={10} >
                                <VideoPlayer video={this.state.selectedVideo}/>
                            </Grid.Column>
                            <Grid.Column tablet={6} computer={6}>
                                <Responsive >
                                    <VideoItemContainer videolist={this.state.videos} onSelectVideo={(video) => {this.setState({ selectedVideo: video})}}/>
                                </Responsive>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {/* <VideoList /> */}
            </Layout>
          )
    }
}
export default VideoPlayerPage
