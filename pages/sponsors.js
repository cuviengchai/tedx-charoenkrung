import Layout from "../components/Layout"
import SponsorItem from "../components/Sponsors/SponsorItem"
import React from "react"
import styled from "styled-components"
import { Card } from "semantic-ui-react"

const CardList = styled.div`
    & .columns{
        display: flex;
        padding: 20px
        max-height: 500px;
    }
`
class Sponsors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: "AIS",
          image: "static/images/partners/ais.png",
          link: "link1",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar."
        },
        {
          name: "Pana",
          image: "static/images/partners/pana.png",
          link: "link2",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar."
        },
        {
          name: "Isuzu",
          image: "static/images/partners/isuzu.png",
          link: "link3",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar."
        },
        {
          name: "TCDC",
          image: "static/images/partners/tcdc.png",
          link: "link3",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar."
        },
        {
          name: "Sheraton",
          image: "static/images/partners/sheraton.png",
          link: "link3",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar."
        }
      ]
    }
  }
  render() {
    // console.log(this.state.data.map(sponsor => console.log(sponsor.name)))
    return (
      <Layout pageName="Sponsors">
        <Card.Group itemsPerRow={4}>
          <div className="ui four column very relaxed grid">
            {this.state.data.map((sponsor, idx) => (
              <div key={idx} className="column is-2">
                <SponsorItem
                  name={sponsor.name}
                  image={sponsor.image}
                  link={sponsor.link}
                  details={sponsor.details}
                />
              </div>
            ))}
          </div>
        </Card.Group>
      </Layout>
    )
  }
}

export default Sponsors
