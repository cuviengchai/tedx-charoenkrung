import React from 'react';
import styled from 'styled-components'
import { Container, Header, Divider } from 'semantic-ui-react'
const MyContainer = styled(Container)`
  padding: 0rem 2rem;
`
export default ({ topic }) => (
    <MyContainer textAlign='left'>
        <Header size='huge'> {topic}</Header>
        <Divider />
    </MyContainer>
)