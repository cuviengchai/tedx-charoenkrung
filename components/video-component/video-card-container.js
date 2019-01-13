import React, { Component } from 'react'
import { Header, Grid, Divider, Segment } from 'semantic-ui-react'
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
        const { videolist, theme, detail, year } = this.props
        return (
            
            <Grid center columns={4}>
                <Grid.Row>
                    <Header as='h1' icon textAlign='center'>
                    <Header.Content>{theme}</Header.Content>
                    <Header.Subheader>{detail}</Header.Subheader>
                    </Header>
                </Grid.Row>
                <Divider horizontal> {year} </Divider>  
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