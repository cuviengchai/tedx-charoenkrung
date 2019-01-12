import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, Grid } from 'semantic-ui-react'
import VideoCard from './video-card'
import _ from 'lodash'
import Router from 'next/router'

class VideoCardContainer extends Component {
    viewVideo = (video) => {
        Router.push ({
            pathname: '/videoplayer',
            query: { videoIndex: `${video.index}` }
        })
    }
    render() {
        const { videolist } = this.props
        return (
            <Grid relaxed columns={4}>
                <Grid.Row >
                    <Header size='medium' mobile={16} computer={16}> Videolist</Header>
                </Grid.Row>
                <Grid.Row>
                { _.defaultTo(videolist,[]).map((video, idx)=>(
                    <Grid.Column key={`card-col-${idx}`}>
                    <VideoCard key={`card-${idx}`} video={video} onClickVideo={ (video) => this.viewVideo(video) }/> 
                    </Grid.Column>
                ))}
                </Grid.Row>
          </Grid>
        )
    }
}
    
export default VideoCardContainer