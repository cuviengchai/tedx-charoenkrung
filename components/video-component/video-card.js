import React from 'react'
import styled from 'styled-components'
const Card = {
    MyContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom : 1rem;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        -moz-transition: opacity 0.2s ease-in-out;
        -webkit-transition: opacity 0.2s ease-in-out;
        &:hover {
            opacity: 0.6;
            transition: opacity 0.2s ease-in-out;
            -moz-transition: opacity 0.2s ease-in-out;
            -webkit-transition: opacity 0.2s ease-in-out;
        }
        @media screen and (max-width: 990px) {
            flex-direction: row;
        }
    `,
    Image: styled.img`
        width: 240px;
        @media screen and (max-width: 1240px) {
            width: 160px;
        }
        @media screen and (max-width: 990px) {
            height: 120px;
        }
    `,
    TextBox: styled.div`
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0rem;
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
        margin-bottom: 0.2rem;
    `
}    
const VideoCard = ({video, onClickVideo}) => {
    const { image, title, card} = video
    return (
        <Card.MyContainer onClick={ () => { onClickVideo(video) } }>
            <Card.Image src={image} />
            <Card.TextBox>
                <Card.Title> {title} </Card.Title>
                <Card.Description> {card} </Card.Description>
            </Card.TextBox>
        </Card.MyContainer>
    )
}

export default VideoCard