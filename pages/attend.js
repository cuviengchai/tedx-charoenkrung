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
  constructor(props) {
    super(props)
  }

  render() {
    const year = this.props.router.query.year
    console.log("attend year: ", year)
    // const index = this.props.router.query.year
    return (
      // <div>
      //   {year === "2017" ? (
      //     <Layout pageName="Attend" subPageName={index}>
      //       <DotsMatter year={index} />
      //       <AttendVideoPlayers year={index} />
      //       <Speakers year={index} />
      //       <Volunteers year={index} />
      //     </Layout>
      //   ) : (
      //     <Layout pageName="Attend" subPageName={index}>
      //       <DotsMatter year={index} />
      //       <AttendVideoPlayers year={index} />
      //       <Speakers year={index} />
      //       <Volunteers year={index} />
      //     </Layout>
      //   )}
      // </div>
      // <div>
      //   {year === "2017" ? (
      //     <Layout pageName="Attend" subPageName="2017">
      //       <DotsMatter year="2017" />
      //       <AttendVideoPlayers year="2017" />
      //       <Speakers year="2017" />
      //       <Volunteers year="2017" />
      //     </Layout>
      //   ) : (
      //     <Layout pageName="Attend" subPageName="2019">
      //       <DotsMatter year="2019" />
      //       <AttendVideoPlayers year="2019" />
      //       <Speakers year="2019" />
      //       <Volunteers year="2019" />
      //     </Layout>
      //   )}
      // </div>
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
