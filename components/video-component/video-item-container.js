import React from 'react'
import { Item } from 'semantic-ui-react'
import _ from 'lodash'
const VideoItemContainer = ({ year, videolist, onSelectVideo }) => {
  return (
    <Item.Group divided>
      {_.defaultTo(videolist,[]).map((video, idx)=>(
        <Item key={`item-${idx}`} onClick={() => onSelectVideo(year, video)}>
          <Item.Image size='small' src={video.image} />
          <Item.Content >
            {/* <Item.Header> {title} </Item.Header> */}
            <Item.Meta> {video.title}</Item.Meta>
            <Item.Description>
              {video.description}
            </Item.Description>
            {/* <Item.Extra>Additional Details</Item.Extra> */}
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  )
}

export default VideoItemContainer