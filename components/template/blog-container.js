import React from 'react'
import { Grid, Image} from 'semantic-ui-react'
import Blog from './blog'
import styled from 'styled-components'
import TopBlog from './top-blog'
import Contact from './contact'
import { aboutContent, contactList } from '../../content/about-content'

const BlogColumn = styled.div`
    display: flex;
    margin-bottom: 2rem;
`
const MyContainer = styled.div`
    display: flex;
    margin: 0rem 2rem;
`
const BlogContainer = () => {
    const { Header, LeftBlogs, RightBlogs } = aboutContent
    const { Contacts } = contactList;
    return (
        <MyContainer>
        <Grid>
            <Grid.Row>
                <TopBlog content={Header}/>
                <br />
            </Grid.Row>
            <Grid.Row>
            <Grid>
                <Grid.Column mobile={16} computer={12} >
                { LeftBlogs.map(left => (
                    <BlogColumn key={left.topic}>
                        <Blog content={left}/>
                    </BlogColumn>
                ))}
                </Grid.Column>
                <Grid.Column mobile={16} computer={4}>
                    { RightBlogs.map(right => (
                        <BlogColumn key={right.topic}>
                            <Blog content={right}/>
                        </BlogColumn>
                    ))}
                    {Contacts.map((contact)=>(
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