import React from 'react'
import { Grid } from 'semantic-ui-react'
import BlogContainer from './blog-container'
import styled from 'styled-components'

const MyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem 2rem 0rem;
`
const Format = () => (
  <Grid columns={2} divided>
  <Grid.Row >
      <Grid.Column mobile={16} computer={2}>
        <MyContainer>
        <p>About</p>
        <p>detail</p>
        </MyContainer>
      </Grid.Column>
      <Grid.Column mobile={16} computer={14}>
        <BlogContainer />
      </Grid.Column>
      </Grid.Row>
  </Grid>
)

export default Format