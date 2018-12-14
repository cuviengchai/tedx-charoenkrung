import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import VideoList from '../components/video-component/video-card-container'
import VideoContainer from '../components/video-component/video-container'
import VideoCardConatiner from '../components/video-component/video-card-container'
import BlogContainer from '../components/blog-component/blog-container.js'
import videolist from '../content/video-page/videolist.json'

import videoblog from '../content/video-page/videoblog.json'
const VideoPage = props => {
  console.log(videolist)
  return (
    <Layout pageName="video" color='teal'>
      {/* <VideoContainer /> */}
      {/* <VideoList /> */}
      <BlogContainer blogContent={videoblog}/>
      {/* <VideoCardConatiner videolist={videolist} /> */}
    </Layout>
  )
}

export default VideoPage
