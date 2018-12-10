import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import VideoPlayer from '../components/video-player/video'
import VideoContainer from '../components/video-player/video-container'
const Background = styled.div`
  background-color: #d7f4ea;
`
const ItemGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20%;
  margin-top:4em;
`
const VideoPage = props => (
  <Layout pageName="video" color='teal'>
    <VideoContainer />
  </Layout>
)

export default VideoPage
