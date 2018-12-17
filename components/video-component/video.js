import React from 'react'
import { Embed } from 'semantic-ui-react'
import VideoDetail from './video-detail'
const VideoPlayer = ({video}) => {
  const { image, id } = video
  return (
    <div>
  <Embed
    autoplay={true}
    color='white'
    hd={true}
    id={id}
    iframe={{
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    placeholder={image}
    source='youtube'
  />
  <VideoDetail />
  </div>
  )
}
export default VideoPlayer