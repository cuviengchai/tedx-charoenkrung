import React from "react"
import Layout from "../components/Layout"
import BlogContainer from "../components/blog-component/blog-container.js"
import videoblog from "../content/video-page/videoblog.json"

const VideoPage = props => {
  return (
    <Layout pageName="Video" color="teal">
      <BlogContainer blogContent={videoblog} left={16} right={0} />
    </Layout>
  )
}

export default VideoPage
