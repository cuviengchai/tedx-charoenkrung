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
        <DotsMatter />
        <AttendVideoPlayers />
        <Speakers />
        <Volunteers />
      </Layout>
    )
  }
}

export default Attend
