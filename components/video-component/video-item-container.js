import React from 'react'
import { Item } from 'semantic-ui-react'
import VideoItem from './video-item'
import _ from 'lodash'
const VideoItemContainer = ({videolist, onSelectVideo}) => {
  return (
    <Item.Group divided>
      {_.defaultTo(videolist,[]).map((video, idx)=>(
          <VideoItem key={`item-${idx}`} video={video} onSelectVideo={onSelectVideo} />
      ))}
    </Item.Group>
  )
}

export default VideoItemContainer