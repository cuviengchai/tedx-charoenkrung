import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'
const Card = {
    MyContainer: styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom:0.8rem;
        cursor: pointer;
        @media screen and (max-width: 990px) {
            flex-direction: row;
        }
    `,
    TextBox: styled.div`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 990px) {
            margin: 0rem 2rem;
        }
    `,
    Title: styled.p`
        font-size: 1rem;
        margin: 0rem;
        font-weight: bold;
        margin-bottom: 0.3rem;
        margin-top: 0.2rem;
        
    `,
    Description: styled.p`
        font-size: 0.8rem;
    `
}    
const VideoCard = ({video, onClickVideo}) => {
    const { image, title, card} = video
    return (
        <Card.MyContainer onClick={ () => { onClickVideo(video) } }>
            <Image src={image} size='medium'/>
            <Card.TextBox>
                <Card.Title> {title} </Card.Title>
                <Card.Description> {card} </Card.Description>
            </Card.TextBox>
        </Card.MyContainer>
    )
}

export default VideoCard