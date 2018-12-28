import Layout from "../components/Layout"
import autoBind from "react-autobind"
import SponsorItem from "../components/Sponsors/SponsorItem"
import React from "react"
import styled from "styled-components"
import { Container, Grid, Responsive, Segment, Image } from "semantic-ui-react"
import Speakers from "../components/Speakers"
import Volunteers from "../components/Volunteers"
import DotsMatter from "../components/DotsMatter"

class Attend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout pageName="Attend">
        <DotsMatter />
        <Speakers />
        <Volunteers />
      </Layout>
    )
  }
}

export default Attend
