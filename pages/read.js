import React, {Component} from "react"
import Layout from "../components/Layout"
import blogContent from '../content/blog-page/blog-content.json'
import _ from 'lodash'
import styled from 'styled-components'
import Router from 'next/router'
import { Grid, Image } from 'semantic-ui-react'
const { Blogs } = blogContent
class ContentPage extends Component {
    onClickBlog = (card) => {
        Router.push ({
            pathname: '/blog',
            query: { blogIndex: `${card.index}` }
        })
    }
    render(){
        console.log(Blogs)
        return (
            <Layout pageName="content" color='teal'>
                <Grid stackable columns={2} >
                
                    {_.defaultTo(Blogs,[]).map((it, idx) => (
                    <Grid.Column key={`blog-${idx}`} >
                        <BlogCard blog={it} onClickCard={this.onClickBlog}/>
                    </Grid.Column>
                    ))}
                
                </Grid>
            </Layout>
        )
    }
}
export default ContentPage

const BlogContainer = styled.div`
    
`

const BlogCard = ({ blog, onClickCard }) => (
    <BlogContainer onClick={()=> onClickCard(blog)}>
        <Image src={blog.image} width="800px"/>
    </BlogContainer>
)
