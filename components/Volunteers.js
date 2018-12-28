import React from "react"
import styled from "styled-components"
import { Container, Grid, Responsive, Image } from "semantic-ui-react"
import _ from "lodash"

const MainVolunteerType = styled.div`
  font-weight: bold;
`

const VolunteerMember = styled.div`
  font-family: HelveticaNeue;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`

const SubVolunteerType = styled.div`
  font-style: italic;
  color: #6b6b6b;
`

const Content = styled.div`
  padding-bottom: 1em;
`

const VolunteerHeader = styled.div`
  padding-top: 1em;
  padding-bottom: 4em;
`

class Volunteers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      volunteers: null
    }
    this.renderVolunteers = this.renderVolunteers.bind(this)
  }
  componentDidMount() {
    fetch("./static/volunteers.JSON")
      .then(res => res.json())
      .then(res => {
        console.log("RES: ", res)
        this.setState({ volunteers: res })
      })
      .then(() => {
        this.setState({ isLoaded: true })
      })
  }
  renderVolunteers() {
    console.log("Vol:", this.state.volunteers)
    const { isLoaded, volunteers } = this.state
    return this.state.volunteers.map((col, idx0) => (
      <Grid.Column>
        {_.get(col, "content", []).map((it, idx1) => (
          <Content>
            <MainVolunteerType key={"mainType" + idx1}>
              {_.get(it, "type", "Nontype")}
            </MainVolunteerType>
            {_.get(it, "subType", []).length !== 0 ? (
              _.get(it, "subType", []).map((subType, idx2) => (
                <div>
                  <SubVolunteerType key={"subType" + idx2}>
                    {_.get(subType, "type", "undefined")}
                  </SubVolunteerType>
                  {_.get(subType, "members", []).map((member, idx3) => (
                    <VolunteerMember key={"subVolunteer" + idx3}>
                      {member}
                    </VolunteerMember>
                  ))}
                </div>
              ))
            ) : (
              <div>
                {_.get(it, "members", []).map((member, idx3) => (
                  <VolunteerMember key={"subVolunteer" + idx3}>
                    {member}
                  </VolunteerMember>
                ))}
              </div>
            )}
          </Content>
        ))}
      </Grid.Column>
    ))
  }
  render() {
    console.log("isLoaded: ", this.state.isLoaded)
    console.log("volunteers: ", this.state.volunteers)
    return (
      <div>
        <Image src="static/images/attend/Volunteers.png" size="huge" />
        <VolunteerHeader>Every dots matter when together</VolunteerHeader>
        <Grid columns={4} stackable>
          {this.state.isLoaded ? this.renderVolunteers() : null}
        </Grid>
      </div>
    )
  }
}

export default Volunteers
