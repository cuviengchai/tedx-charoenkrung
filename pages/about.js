import React, {Component} from "react"
import { Grid } from 'semantic-ui-react'
import Layout from "../components/Layout"
import BlogContainer from '../components/blog-component/blog-container'
import styled from "styled-components"

import about from '../content/about-page/about.json'
import sponsor from '../content/about-page/sponsor.json'
import test from '../content/about-page/test.json'
import Router from 'next/router'
import { withRouter } from 'next/router'
import _ from 'lodash'

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem;
    box-sizing: border-box;
    transition: all 0.2s;
    opacity:0.5;
    user-select: none;
    &:hover {
      opacity:0.8;
      color: #fff;
      background: #db2828;
    }
    &:active {
      filter: brightness(0.7);
    }
    &.active {
      opacity:1;
      color: #fff;
      background: #db2828;
    }
  }
`
const Name = [["About", about], ["Sponsor", sponsor], ["test", test]];
export default withRouter(class About extends Component{
  onClick = (idx) => (e) => {
    Router.push(
    `${Router.router.pathname}?subsection=${idx}`,
    `${Router.router.pathname}?subsection=${idx}`, {
      shallow: true
    })
  }
  render(){
    const pageIdx = _.defaultTo(parseInt(this.props.router.query.subsection), 0);
    return (
    <Layout pageName="About" color='teal'>
      <Grid columns={2} divided>
      <Grid.Row >
          <Grid.Column mobile={16} computer={2}>
            <MyContainer>
              {
                Name.map((it, idx) => {
                  return (
                    <div key={`AboutTopic-${idx}`} className={pageIdx === idx ? 'active' : ''} onClick={this.onClick(idx)}>{it[0]}</div>
                  )
                })
              }
            </MyContainer>
          </Grid.Column>
          <Grid.Column mobile={16} computer={14}>
            <BlogContainer blogContent={Name[pageIdx][1]}/>
          </Grid.Column>
          </Grid.Row>
      </Grid>
    </Layout>
    )
  }
})
