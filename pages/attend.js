import Layout from "../components/Layout"
import React from "react"
import { withRouter } from "next/router"
import Speakers from "../components/Attend/Speakers"
import Volunteers from "../components/Attend/Volunteers"
import DotsMatter from "../components/Attend/DotsMatter"
import AttendVideoPlayers from "../components/Attend/AttendVideoPlayer"

// const { year2017, year2019 } = Sponsors
// const partnership = { "2017": year2017, "2019": year2019 }

class Attend extends React.Component {
  render() {
    const year = this.props.router.query.year
    console.log("the year: ", year)
    return (
      <Layout pageName="Attend" subPageName={year}>
        <DotsMatter year={year} />
        <AttendVideoPlayers year={year} />
        <Speakers year={year} />
        <Volunteers year={year} />
      </Layout>
    )
  }
}

export default withRouter(Attend)
