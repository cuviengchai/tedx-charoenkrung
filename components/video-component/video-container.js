import React from 'react'
import { Grid, Responsive } from 'semantic-ui-react'
import VideoPlayer from './video'
import VideoItemContainer from './video-item-container'
import videoblog from '../../content/video-page/videoblog.json'
import styled from 'styled-components'
const MyContainer = styled.div`
    display: flex;
    margin: 0rem 2rem;
    justify-content: center;
`
const VideoContainer = () => {
    const { VideoList } = videoblog
    return (
        <MyContainer>
        <Grid>
            <Grid.Row>
                <h2 > Video Title </h2>
            </Grid.Row>
            <Grid.Row columns={2}>
            <Grid>
                <Grid.Column mobile={16} tablet={10} computer={10} >
                    <VideoPlayer />
                </Grid.Column>
                <Grid.Column tablet={6} computer={6}>
                    <Responsive >
                        <VideoItemContainer videolist={VideoList} onSelectVideo={(video) => {console.log(video)}}/>
                    </Responsive>
                </Grid.Column>
            </Grid>
            </Grid.Row>
        </Grid>
        {/* <VideoList /> */}
        </MyContainer>
    )
}
export default VideoContainer