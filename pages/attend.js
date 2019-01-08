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
        <DotsMatter year="2017" key="info-2017" className="info-2017" />
        <AttendVideoPlayers isMobile={true} />
        <Speakers />
        <DotsMatter year="2018" key="info-2018" className="info-2018" />

        <Speakers is2019 />
        <Volunteers isMobile={true} />
      </Layout>
    )
  }
}

export default Attend
