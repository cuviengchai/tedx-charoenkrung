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
            <Grid.Row>
            <Grid>
                <Grid.Column mobile={16} tablet={16} computer={10} >
                    <VideoPlayer />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={10}>
                    
                        <VideoItemContainer videolist={VideoList} onSelectVideo={(video) => {console.log(video)}}/>
                    
                </Grid.Column>
            </Grid>
            </Grid.Row>
        </Grid>
        {/* <VideoList /> */}
        </MyContainer>
    )
}
export default VideoContainer