import React from "react"
import Layout from "../components/Layout"
import VideoCard from "../components/video-component/video-card"
import { Header, Divider, Grid } from 'semantic-ui-react'
import Router from 'next/router'
import { withRouter } from 'next/router'
import _ from 'lodash'
import video2017 from "../content/video-page/video2017.json"
import video2019 from "../content/video-page/video2019.json"

const yearContent2 = { 
  "2017": video2017,
  "2018": video2019,
  "2019": video2019,
  }
class VideoPage extends React.Component {
  handleClick = (year) => {
    Router.push(
      `${Router.router.pathname}?year=${year}`,
      `${Router.router.pathname}?year=${year}`, {
        shallow: true
      })
  }
  render(){
    const year = this.props.router.query.year
    return (
      <Layout pageName="Watch" subPageName={year} color="teal">
        <WatchContainer content={yearContent2[year]}> </WatchContainer>
      </Layout>
    )
  }
}

export default withRouter(VideoPage)

class WatchContainer extends React.Component {
  viewVideo = ( year,video ) => {
    Router.push ({
        pathname: '/videoplayer',
        query: { 
          year: `${year}`,
          videoIndex: `${video.index}` }
    })
  }
  render() {
    const { content } = this.props
    const { Theme, Detail, Year, VideoList } = content
    return (
      <Grid columns={4}>
        <Grid.Row>
          <Header as='h1' icon textAlign='center'>
          <Header.Content> { Theme } </Header.Content>
          <Header.Subheader>{ Detail }</Header.Subheader>
          </Header>
        </Grid.Row>
        <Divider horizontal> { Year } </Divider>  
        <Grid.Row>
        { _.defaultTo(VideoList,[]).map((video, idx)=>(
            <Grid.Column key={`card-col-${idx}`}>
              <VideoCard key={`card-${idx}`} video={video} onClickVideo={ (video) => this.viewVideo( Year, video) }/> 
            </Grid.Column>
        ))}
        </Grid.Row>
      </Grid>
    )
  }
}