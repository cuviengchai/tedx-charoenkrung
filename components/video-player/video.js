import React from 'react'
import { Embed, Responsive, Segment } from 'semantic-ui-react'
import VideoItems from './video-items'
import VideoDetail from './video-detail'
const VideoPlayer = () => (
  <div>
  <Embed
    autoplay={true}
    color='white'
    hd={false}
    id='gJscrxxl_Bg'
    iframe={{
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    placeholder='/images/image-16by9.png'
    source='youtube'
  />
  <VideoDetail />
  <Responsive as={Segment} {...Responsive.onlyComputer}>
    <VideoItems />
  </Responsive>
  
  
  </div>
)

export default VideoPlayer