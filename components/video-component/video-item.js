import React from 'react'
import { Item } from 'semantic-ui-react'

const VideoItem = ({video, onSelectVideo}) => {
  const {title, image, description } = video
  return (
      <Item onClick={() => onSelectVideo(video)}>
        <Item.Image size='small' src={image} />
        <Item.Content >
          {/* <Item.Header> {title} </Item.Header> */}
          <Item.Meta> {title}</Item.Meta>
          <Item.Description>
            {description}
          </Item.Description>
          {/* <Item.Extra>Additional Details</Item.Extra> */}
        </Item.Content>
      </Item>
  )
}

export default VideoItem