import React from "react"
import styled from "styled-components"
import { Container, Segment, Grid, Responsive, Image } from "semantic-ui-react"

const DotsMatterHeader = styled.div`
  font-family: HelveticaNeue;
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #000000;
  padding-bottom: 1em;
`

const DotsMatterContent = styled.div`
  font-family: HelveticaNeue;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`

const DotsMatterIcon = styled(Image)`
  padding-bottom: 2.5em;
`

const DotsMatterImages = styled(Image)`
  margin-top: 1em;
  padding-bottom: 2.5em;
`

const DotsMatter = props => (
  <div>
    <Grid columns={2}>
      <div>
        <Grid.Column>
          <DotsMatterIcon
            src="static/images/attend/DotsMatter.png"
            size="large"
          />
          <div>
            <DotsMatterHeader>TEDxCharoenkrung 2019</DotsMatterHeader>
            <DotsMatterContent>27 January 2019</DotsMatterContent>
            <DotsMatterContent>At Prince Rama Theater</DotsMatterContent>
            <DotsMatterContent>Talk: 13.00 - 18.00</DotsMatterContent>
            <DotsMatterContent>After Party: 18.00 - 21.00</DotsMatterContent>
          </div>
        </Grid.Column>
      </div>
      <div>
        <DotsMatterHeader>Why Dots Matter?</DotsMatterHeader>
      </div>
    </Grid>
    <Grid columns={3}>
      <Grid.Column>
        <DotsMatterImages src="static/images/attend/quote1.jpg" size="medium" />
      </Grid.Column>
      <Grid.Column>
        <DotsMatterImages src="static/images/attend/quote2.jpg" size="medium" />
      </Grid.Column>
      <Grid.Column>
        <DotsMatterImages src="static/images/attend/quote3.jpg" size="medium" />
      </Grid.Column>
    </Grid>
  </div>
)

export default DotsMatter
