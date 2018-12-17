import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react'
export default ({ text }) => (
    <Container textAlign='left'>
        This supposed to be a paragraph<br />
        <p>
        { text }
        </p>
    </Container>
)