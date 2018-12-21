import React from "react"
import Layout from "../components/Layout"
import { Grid, Header, Icon } from "semantic-ui-react"
import styled from 'styled-components'

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const GridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
`
const  About = () => (
  <Layout pageName="About" color='teal'>
    <GridContainer>
      <Grid.Column mobile={14} computer={6}>
      <MyContainer>
        <Header size='medium'> ประวัติความเป็นมา </Header>
        <p>
        TEDxCharoenkrung is a non-profit organization located in Charoenkrung District. Charoenkrung is the first road in Thailand built with modern construction methods. Charoenkrung is an antique commercial community full of historical uniqueness, diversity of race, contemporary senses and representing the future district as its name “New Road”.
        </p>
      </MyContainer>
      <br />
      <MyContainer>
        <Header size='small'> TEDxChroenkrung aims to spread ideas that can shape a city into a prosperous city and create a doer community as well. </Header>
      </MyContainer>
      </Grid.Column>
      <Grid.Column mobile={14} computer={6}>
        <Header as='h4'>
            <Icon name="facebook square" size="big"/>
            <Header.Content>
            <a href= "https://www.facebook.com/TEDxCharoenkrung/"> Facebook </a>
            <Header.Subheader>Facebook</Header.Subheader>
            </Header.Content>
        </Header>
        <Header as='h4'>
            <Icon name="twitter" size="big"/>
            <Header.Content>
            <a href= "https://twitter.com/TEDxCharoenkrun"> Twitter </a>
            <Header.Subheader>Twitter</Header.Subheader>
            </Header.Content>
        </Header>
        <Header as='h4'>
            <Icon name="mail" size="big"/>
            <Header.Content>
            <a href= "mailto:tedxchraroenkrung@gmail.com"> E-mail </a>
            <Header.Subheader>E-mail</Header.Subheader>
            </Header.Content>
        </Header>
      </Grid.Column>
    </GridContainer>
    </Layout>
)
export default About
