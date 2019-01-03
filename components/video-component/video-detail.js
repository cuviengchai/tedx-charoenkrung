import React, { Component } from 'react'
import { Menu, Segment, Header, Divider } from 'semantic-ui-react'
import _ from 'lodash'
export default class VideoDetail extends Component {
  state = { activeItem: 'Details'}

  handleItemClick = (name) => (e) => {
    this.setState({ activeItem: name})
  }

  render() {
    const { activeItem } = this.state
    const { detailsContent, transcriptContent } = this.props
    return (
      <div>
        <Menu pointing>
          <Menu.Item name='Details' active={activeItem === 'Details'} onClick={this.handleItemClick('Details')} />
          <Menu.Item name='Transcript' active={activeItem === 'Transcript'} onClick={this.handleItemClick('Transcript')} />
        </Menu>
        <Segment>
        { this.state.activeItem === 'Details' && _.defaultTo(detailsContent,[]).map((it,idx) => {
          if(idx === 0){
            return (
              <div>
                <Header size='medium'>{it}</Header>
                <Divider />
              </div>
            )
          } else {
              return (
                <p key={`details-${idx}`}> {it} </p>
            )
          } 
        })}
        
        { this.state.activeItem === 'Transcript' && _.defaultTo(transcriptContent,[]).map((it,idx)=> (
          <p key={`trancript-${idx}`}> {it} </p>
        ))}
        </Segment>
        <br />
      </div>
    )
  }
}