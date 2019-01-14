import React, { Component } from "react"
import Layout from "../components/Layout"
import { Grid, Responsive } from 'semantic-ui-react'
import VideoPlayer from '../components/video-component/video'
import VideoItemContainer from '../components/video-component/video-item-container'
import video2017 from '../content/video-page/video2017.json'
import video2019 from '../content/video-page/video2019.json'
import Router from 'next/router'
import { withRouter } from 'next/router'
const yearContent = { "2017": video2017, "2019": video2019 }
export default withRouter(class VideoPlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
          selectedVideo: {}
        };
    }
    onSelectVideo( year, video ){
        const { index } = video
        Router.push(
            `${Router.router.pathname}?year=${year}&videoIndex=${index}`,
            `${Router.router.pathname}?year=${year}&videoIndex=${index}`, {
              shallow: true
            })
    }
    render(){
        const videoIndex = this.props.router.query.videoIndex
        const year = this.props.router.query.year
        const { VideoList } = yearContent[year]
        return (
            <Layout pageName="video" color='teal'>
                <Grid>
                    <Grid.Row>
                        <h2> { VideoList[videoIndex].title} </h2>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                            <Grid.Column mobile={16} tablet={16} computer={10} >
                                <VideoPlayer video={VideoList[videoIndex]}/>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={16} computer={6}>
                                <Responsive >
                                    <VideoItemContainer year={year} videolist={yearContent[year].VideoList} onSelectVideo={this.onSelectVideo}/>
                                </Responsive>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {/* <VideoList /> */}
            </Layout>
          )
    }
})
