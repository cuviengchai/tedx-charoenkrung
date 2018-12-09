import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Format from '../components/template/format'

const Background = styled.div`
  background-color: #d7f4ea;
`
const ItemGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20%;
  margin-top:4em;
`
const About = props => (
  <Layout pageName="About" color='teal'>
    <Format />
  </Layout>
)

export default About
