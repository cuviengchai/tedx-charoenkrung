import React from 'react'
import { Grid } from 'semantic-ui-react'
import Blog from './blog'
import styled from 'styled-components'
import Contact from './contact'
import VideoCardContainer from '../video-component/video-card-container'
import _ from 'lodash'

const BlogColumn = styled.div`
    display: flex;
    margin-bottom: 2rem;
`
const MyContainer = styled.div`
    display: flex;
    margin: 0rem 2rem;
`
const TopSpace = styled.br`
    height: 4rem;
`
const BlogContainer = ({ blogContent }) => {
    const { Header, LeftBlogs, RightBlogs, Contacts, VideoList } = blogContent
    return (
        <MyContainer>
        <Grid>
            <Grid.Row>
            { Header && <Blog content={Header} topicSize='large'/> }
            { Header && <TopSpace /> }    
            </Grid.Row>
            <Grid.Row>
            <Grid>
                <Grid.Column mobile={16} computer={12} >
                { VideoList && <VideoCardContainer videolist={VideoList} />}
                { _.defaultTo(LeftBlogs, []).map(left => (
                    <BlogColumn key={left.topic}>
                        <Blog content={left} topicSize='small'/>
                    </BlogColumn>
                ))}
                </Grid.Column>
                <Grid.Column mobile={16} computer={4}>
                    { _.defaultTo(RightBlogs, []).map(right => (
                        <BlogColumn key={right.topic}>
                            <Blog content={right} topicSize='small'/>
                        </BlogColumn>
                    ))}

                    { _.defaultTo(Contacts, []).map((contact)=>(
                        <Contact key={contact.name} contact={contact}/>
                    ))}
                </Grid.Column>
            </Grid>
            </Grid.Row>
        </Grid>
        </MyContainer>
    )
}
export default BlogContainer