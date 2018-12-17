import React, {Component} from "react"
import Layout from "../components/Layout"
import CardContainer from '../components/blog-component/card-container'
import blogContent from '../content/blog-page/blog-content.json'
import Router from 'next/router'
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
            <h1> Hello</h1>
            <CardContainer Blogs={Blogs} onClickBlog={(card) => {this.onClickBlog(card)}}/>   
            </Layout>
        )
    }
}
export default ContentPage
