import React, { Component } from "react"
import Layout from "../components/Layout"
import { Grid, Responsive } from 'semantic-ui-react'
import VideoPlayer from '../components/video-component/video'
import VideoItemContainer from '../components/video-component/video-item-container'
import videoblog from '../content/video-page/videoblog.json'
import Router from 'next/router'
import { withRouter } from 'next/router'
const { VideoList } = videoblog  
export default withRouter(class VideoPlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: VideoList,
          selectedVideo: VideoList[0]
        };
    }
    onSelectVideo(video){
        const { index } = video
        Router.push(
            `${Router.router.pathname}?videoIndex=${index}`,
            `${Router.router.pathname}?videoIndex=${index}`, {
              shallow: true
            })
    }
    render(){
        const videoIndex = this.props.router.query.videoIndex
        return (
            <Layout pageName="video" color='teal'>
                <Grid>
                    <Grid.Row>
                        <h2> {VideoList[videoIndex].title} </h2>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                            <Grid.Column mobile={16} tablet={16} computer={10} >
                                <VideoPlayer video={VideoList[videoIndex]}/>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={16} computer={6}>
                                <Responsive >
                                    <VideoItemContainer videolist={VideoList} onSelectVideo={(video) => {this.onSelectVideo(video)}}/>
                                </Responsive>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {/* <VideoList /> */}
            </Layout>
          )
    }
})
