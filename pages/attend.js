import Layout from "../components/Layout"
import React from "react"
import { Container, Grid, Responsive, Segment, Image } from "semantic-ui-react"
import Speakers from "../components/Attend/Speakers"
import Volunteers from "../components/Attend/Volunteers"
import DotsMatter from "../components/Attend/DotsMatter"
import AttendVideoPlayers from "../components/Attend/AttendVideoPlayer"

class Attend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout pageName="Attend">
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <DotsMatter isMobile={true} />
          <AttendVideoPlayers isMobile={true} />
          <Speakers isMobile={true} />
          <Volunteers isMobile={true} />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <DotsMatter isMobile={false} />
          <AttendVideoPlayers isMobile={false} />
          <Speakers isMobile={false} />
          <Volunteers isMobile={false} />
        </Responsive>
      </Layout>
    )
  }
}

export default Attend
