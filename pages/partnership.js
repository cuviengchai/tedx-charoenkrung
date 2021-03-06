import React from "react"
import Layout from "../components/Layout"
import { withRouter } from "next/router"
import { Container, Header } from "semantic-ui-react"
import _ from "lodash"
import Sponsors from "../content/partnership-page/sponsor.json"
import CardContainer from "../components/blog-component/card-container"
const { year2017, year2019 } = Sponsors
const partnership = { "2017": year2017, "2019": year2019 }

class Partners extends React.Component {
  render() {
    const index = this.props.router.query.year
    const { FirstPartners, SecondPartners, ThirdPartners, SilverPartners } = partnership[index]
    return (
      <Layout pageName="Partnerships" subPageName={index} color="teal">
        <Container textAlign="center">
          <Header> PARTNERS </Header>
          <p>
            Apart from our staffs, TEDxCharoenkrung has received precious
            supports from our partners who value ‘ideas worth spreading’. We
            appreciate your believe in sharing, giving, learning and doing which
            everyone can reach. Making changes in good ways to society is always
            be our goal.
          </p>
          <br />
          <Header> In {index}, we were thrilled to work with </Header>
          {FirstPartners && <Header size="tiny"> PATRON PARTNER </Header>}
          {FirstPartners && <CardContainer Blogs={FirstPartners} size="5" />}
          <br />
          {SecondPartners && <Header size="tiny"> PLATINUM PARTNERS </Header>}
          {SecondPartners && <CardContainer Blogs={SecondPartners} size="5" />}
          <br />
          {ThirdPartners && <Header size="tiny"> GOLD PARTNERS </Header>}
          {ThirdPartners && <CardContainer Blogs={ThirdPartners} size="5" />}
          <br />
          {SilverPartners && <Header size="tiny"> SILVER PARTNERS </Header>}
          {SilverPartners && <CardContainer Blogs={SilverPartners} size="5" />}
          <br />
          <br />
        </Container>
      </Layout>
    )
  }
}

export default withRouter(Partners)
