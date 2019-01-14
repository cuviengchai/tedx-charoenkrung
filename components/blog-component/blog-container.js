import React from 'react'
import dynamic from 'next/dynamic'
import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import _ from 'lodash'
const Blog = dynamic( () => import('./blog'),
  {
    loading: () => (<p>loading</p>)
  }
)
const Contact = dynamic(() => import('./contact'),
  {
    loading: () => (<p>loading</p>)
  }
)

const BlogColumn = styled.div`
    display: flex;
    margin-bottom: 2rem;
`
const MyContainer = styled.div`
    display: flex;
    margin: 0rem 2rem;
`
const BlogContainer = ({ blogContent, left, right }) => {
    const { Header, LeftBlogs, RightBlogs, Contacts, VideoList } = blogContent
    return (
        <Grid columns='equals'>
            <Grid.Row>
            { Header && <Blog content={Header} topicSize='large'/> }
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={16} computer={ parseInt(left) } >
                { _.defaultTo(LeftBlogs, []).map(left => (
                    <Grid.Column key={left.topic}>
                        <Blog content={left} topicSize='small'/>
                    </Grid.Column>
                ))}
                </Grid.Column>
                <Grid.Column mobile={16} computer={parseInt(right)}>
                    { _.defaultTo(RightBlogs, []).map(right => (
                        <BlogColumn key={right.topic}>
                            <Blog content={right} topicSize='small'/>
                        </BlogColumn>
                    ))}

                    { _.defaultTo(Contacts, []).map((contact)=>(
                        <Contact key={contact.name} contact={contact}/>
                    ))}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default BlogContainer