import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, Grid } from 'semantic-ui-react'
import VideoCard from './video-card'
import _ from 'lodash'
import Router from 'next/router'

class VideoCardContainer extends Component {
    viewVideo = (video) => {
        // console.log(video);
        Router.push({
            pathname: '/about',
            query: { name: 'Zeit' }
          })
    }
    render() {
        const { videolist } = this.props
        return (
            <Grid>
                <Grid.Row>
                    <Header size='medium' mobile={16} computer={16}> Videolist Blog</Header>
                </Grid.Row>
                <Grid.Row>
                { _.defaultTo(videolist,[]).map((video, idx)=>(
                    <Grid.Column key={`card-col-${idx}`}  mobile={16} computer={4}>
                    <VideoCard key={`card-${idx}`} video={video} onClickVideo={ (video) => this.viewVideo(video) }/> 
                    </Grid.Column>
                ))}
                </Grid.Row>
          </Grid>
        )
    }
}
    
export default VideoCardContainer