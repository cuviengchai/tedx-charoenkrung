import React from 'react'
import styled from 'styled-components'
import { Card, Icon, Image, Segment, Grid } from 'semantic-ui-react'

const VideoListContainer = styled.div`
    display: flex
`
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const VideoList = () => (
    <Grid>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
    <Grid.Column  mobile={16} computer={4}>
        <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    /> 
    </Grid.Column>
  </Grid>
)

export default VideoList