import React from "react"
import styled from "styled-components"
import { Grid, Image } from "semantic-ui-react"
import _ from "lodash"

const MainVolunteerType = styled.div`
  font-weight: bold;
`

const VolunteerMember = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  font-family: "Helvetica Neue";
  text-align: left;
`

const SubVolunteerType = styled.div`
  font-style: italic;
  color: #6b6b6b;
  padding-top: 0.25em;
  font-family: "Helvetica Neue";
`

const Content = styled.div`
  padding-bottom: 1em;
  font-family: "Helvetica Neue";
  text-align: left;
`

const VolunteerHeader = styled.div`
  padding-top: 1em;
  padding-bottom: 4em;
  font-family: "Helvetica Neue";
  text-align: left;
  @media only screen and (max-width: 1023px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
`
const VolunteerContainer = styled.div`
  display: initial;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`
const VolunteerContainerMobile = styled.div`
  display: none;
  @media only screen and (max-width: 1023px) {
    display: initial;
    text-align: left;
  }
`

class Volunteers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      volunteers: null,
      year: props.year
    }
    this.renderVolunteers = this.renderVolunteers.bind(this)
  }
  componentDidMount() {
    fetch("./static/attend-page/volunteers.JSON")
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
    const { isLoaded, volunteers } = this.state
    return volunteers.map((col, idx0) => (
      <Grid.Column key={"col" + idx0}>
        {_.get(col, "content", []).map((it, idx1) => (
          <Content key={"col" + idx0 + "content" + idx1}>
            <MainVolunteerType key={"mainType" + idx1}>
              {_.get(it, "type", "Nontype")}
            </MainVolunteerType>
            {_.get(it, "subType", []).length !== 0 ? (
              _.get(it, "subType", []).map((subType, idx2) => (
                <div key={"subType-" + _.get(subType, "type", "undefined")}>
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
    if (this.state.year == "2017") {
      return null
    }
    return (
      <div>
        <Image src="static/images/attend/Volunteers.png" size="huge" />
        <VolunteerHeader>Every dots matter when together</VolunteerHeader>
        <VolunteerContainer>
          <Grid columns={4} stackable>
            {this.state.isLoaded ? this.renderVolunteers() : null}
          </Grid>
        </VolunteerContainer>
        <VolunteerContainerMobile>
          <Grid columns={1} centered textAlign="center">
            {this.state.isLoaded ? this.renderVolunteers() : null}
          </Grid>
        </VolunteerContainerMobile>
      </div>
    )
  }
}

export default Volunteers
