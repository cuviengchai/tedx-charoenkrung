import React, { Component } from "react"
import Layout from "../components/Layout"
import Router from 'next/router'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'next/router'
import { BlogItems } from '../components'
import _ from 'lodash'

const dataList = [
    [
    {
        type: BlogItems.types.Topic,
        topic: "Lorem ipsum 1"
    },
    {
      type: BlogItems.types.Paragraph,
      text: "Lorem ipsum 1"
    }, {
      type: BlogItems.types.Paragraph,
      text: "Lorem ipsum 2"
    }, {
      type: BlogItems.types.Image
    }],
    [{
      type: BlogItems.types.Paragraph,
      text: "Lorem ipsum 3"
    }, {
      type: BlogItems.types.Image
    }, {
    type: BlogItems.types.Paragraph,
    text: "Lorem ipsum 4"
    }]
  ]
export default withRouter(class BlogPage extends Component {
    renderBlog = (data) => {
        return _.defaultTo(data, []).map((it, idx) => {
          switch(it.type) {
            case BlogItems.types.Topic:
                return <BlogItems.Topic topic={it.topic} key={`Topic-${idx}`} />
            case BlogItems.types.Paragraph:
              return <BlogItems.Paragraph text={it.text} key={`Data-${idx}`} />
            case BlogItems.types.Image:
              return <BlogItems.Image key={`Image-${idx}`} />
            default:
              return null
          }
        })
      }
    onSelectVideo = (video) => {
        const { index } = video
        Router.push(
            `${Router.router.pathname}?videoIndex=${index}`,
            `${Router.router.pathname}?videoIndex=${index}`, {
              shallow: true
            })
    }
    render(){
        const blogIndex = this.props.router.query.blogIndex
        console.log(blogIndex)
        return (
            <Layout pageName="video" color='teal'>
                <h1>Blog Page</h1>
                <Container textAlign='center'>
                {
                _.defaultTo(dataList, []).map((it, idx) => (
                    <div key={idx} style={{
                    marginBottom: '20px'
                    }}>
                    {this.renderBlog(it)}
                    </div>
                ))
                }
                </Container>
            </Layout>
          )
    }
})
