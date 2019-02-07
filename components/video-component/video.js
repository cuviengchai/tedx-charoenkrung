import React, { Component } from "react"
import { Embed, Menu, Segment, Header, Divider } from "semantic-ui-react"
import _ from "lodash"
const VideoPlayer = ({ video, minimal }) => {
  const { image, id, detailsContent, transcriptContent } = video
  return (
    <div>
      <Embed
        autoplay={true}
        color="white"
        hd={true}
        id={id}
        iframe={{
          allowFullScreen: true,
          style: {
            padding: 10
          }
        }}
        placeholder={image}
        source="youtube"
      />
      {minimal ? null : (
        <VideoDetail
          detailsContent={detailsContent}
          transcriptContent={transcriptContent}
        />
      )}
    </div>
  )
}
export default VideoPlayer

class VideoDetail extends Component {
  state = { activeItem: "Details" }

  handleItemClick = name => e => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    const { detailsContent, transcriptContent } = this.props
    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name="Details"
            active={activeItem === "Details"}
            onClick={this.handleItemClick("Details")}
          />
          <Menu.Item
            name="Transcript"
            active={activeItem === "Transcript"}
            onClick={this.handleItemClick("Transcript")}
          />
        </Menu>
        <Segment>
          {this.state.activeItem === "Details" &&
            _.defaultTo(detailsContent, []).map((it, idx) => {
              if (idx === 0) {
                return (
                  <div key={`headers-${idx}`}>
                    <Header size="medium">{it}</Header>
                    <Divider />
                  </div>
                )
              } else {
                return <p key={`details-${idx}`}> {it} </p>
              }
            })}

          {this.state.activeItem === "Transcript" &&
            _.defaultTo(transcriptContent, []).map((it, idx) => (
              <p key={`trancript-${idx}`}> {it} </p>
            ))}
        </Segment>
        <br />
      </div>
    )
  }
}
