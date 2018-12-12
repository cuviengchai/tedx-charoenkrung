import React from 'react'
import { Grid, Responsive } from 'semantic-ui-react'
import VideoPlayer from './video'
import VideoItems from './video-items'
import styled from 'styled-components'
const MyContainer = styled.div`
    display: flex;
    margin: 0rem 2rem;
    justify-content: center;
`
const VideoContainer = () => {
    return (
        <MyContainer>
        <Grid>
            <Grid.Row>
                <h2 > Video Title </h2>
            </Grid.Row>
            <Grid.Row centered columns={2}>
            <Grid>
                <Grid.Column mobile={16} tablet={16} computer={12} >
                    <VideoPlayer />
                </Grid.Column>
                <Grid.Column computer={4}>
                    <Responsive {...Responsive.onlyComputer}>
                        <VideoItems />
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