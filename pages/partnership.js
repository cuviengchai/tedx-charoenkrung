import React from "react"
import Layout from "../components/Layout"
import { Container, Header } from 'semantic-ui-react'
import Sponsors from '../content/partnership-page/sponsor.json'
import CardContainer from '../components/blog-component/card-container'
const { FirstPartners, SecondPartners, ThirdPartners } = Sponsors

const Partners = () => (
  <Layout pageName="sponsors" color='teal'>
    
    <Container textAlign='center'>
    <Header> PARTNERS </Header>
    <p>
    Apart from our staffs, TEDxCharoenkrung has received precious supports from our partners who value ‘ideas worth spreading’. We appreciate your believe in sharing, giving, learning and doing which everyone can reach. Making changes in good ways to society is always be our goal.
    </p>
    <br />
    <Header> In 2018, we were thrilled to work with </Header>
    <Header size="tiny"> PATRON PARTNER </Header>
    <CardContainer Blogs={FirstPartners} size ='4'/>
    <br />
    <Header size="tiny"> PLATINUM PARTNERS </Header>
    <CardContainer Blogs={SecondPartners} size ='6'/>
    <br />  
    <Header size="tiny"> GOLD PARTNERS </Header>
    <CardContainer Blogs={ThirdPartners} size ='8'/>     
    </Container>
</Layout>
)
export default Partners