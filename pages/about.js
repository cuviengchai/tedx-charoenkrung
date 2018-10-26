import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Container, Divider, Header, Grid, Segment, Item, Icon, Transition } from 'semantic-ui-react'

const Contact = [
  { icon: 'facebook square', link :'http://facebook.com',name: 'Facebook', size: 'big' },
  { icon: 'instagram', link :'http://instagram.com',name: 'Instagram', size: 'big' },
  { icon: 'twitter', link :'http://twitter.com',name: 'Twitter', size: 'big' },
  ];

  const Content = [
  { topic: "TED คืออะไร ?", context: "เป็นองค์กรไม่แสวงหาผลกำไรที่ก่อตั้งขึ้นเพื่อเผยแพร่แนวความคิดใหม่ๆ ผ่านรูปแบบของ TED Talk ที่มีความยาวไม่เกิน 18 นาที TED\
  เริ่มต้นในปี 1984 ในรูปแบบของการสัมมนา ภายใต้หัวข้อเทคโนโลยีความบันเทิง และการออกแบบ และมีการจัดงานอย่างต่อเนื่องจนปัจจุบันนี้ TED Talk ครอบคลุมหัวข้อในเกือบทุกศาสตร์\
  ตั้งแต่ด้านวิทยาศาสตร์ ธุรกิจ ไปจนถึงประเด็นน่าคิดรอบโลกโดยได้รับการแปลไปกว่า 100 ภาษาแล้ว", color: "blue" },
  { topic: "TED และ TEDx ต่างกันอย่างไร?", context: "TED เป็นงานสัมมนาที่จัดขึ้นโดย TED Conferences LLCประเทศสหรัฐอเมริกา ส่วนงาน TEDx\
  เป็นงานที่จัดขึ้นโดยอาสาสมัครในระดับท้องถิ่นภายใต้ใบอนุญาตและแนวทางการจัดงานจาก TED Conferences LLC" , color: "blue" },
  { topic: "งาน TEDx ภายใต้ชื่อต่างๆ ถูกจัดโดยทีมเดียวกัน?", context: "ไม่ใช่ งาน TEDx ต่างๆ ในประเทศไทยล้วนแล้วถูกจัดขึ้นอย่างเป็นเอกเทศ\
  โดยมีผู้ถือใบอนุญาตต่างท่าน และทีมงานแตกต่างกันออกไป", color: "blue" },
  { topic: "TED คืออะไร ?", context: "เป็นองค์กรไม่แสวงหาผลกำไรที่ก่อตั้งขึ้นเพื่อเผยแพร่แนวความคิดใหม่ๆ ผ่านรูปแบบของ TED Talk ที่มีความยาวไม่เกิน 18 นาที TED\
  เริ่มต้นในปี 1984 ในรูปแบบของการสัมมนา ภายใต้หัวข้อเทคโนโลยีความบันเทิง และการออกแบบ และมีการจัดงานอย่างต่อเนื่องจนปัจจุบันนี้ TED Talk ครอบคลุมหัวข้อในเกือบทุกศาสตร์\
  ตั้งแต่ด้านวิทยาศาสตร์ ธุรกิจ ไปจนถึงประเด็นน่าคิดรอบโลกโดยได้รับการแปลไปกว่า 100 ภาษาแล้ว", color: "blue" },

]
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
        <Segment>
        <Grid centered >
          <Grid.Row >
          
            <Container >
            <Header as='h1'> TEDXCharoenkrung </Header>
            <Header as='h3'> - about team- </Header>
            </Container>
          </Grid.Row>
          <Grid.Row >
            <p>
            TEDxBangkok เป็นแพลตฟอร์มที่ต่อยอด “ไอเดียที่ควรค่าแก่การเผยแพร่”
            จากระดับนานาชาติสู่กรุงเทพฯ จัดขึ้นครั้งแรกเมื่อปี 2015
            โดยการรวมทีมของผู้ที่หลงใหลใน TED Talks โดยเฉพาะ TEDx organizers
            และสมาชิก TED Open Translation Project
            ที่เล็งเห็นถึงความสำคัญในการเผยแพร่ความคิดที่หลากหลาย
            และเชื่อว่าเนื้อหาความรู้และความคิดใหม่ ๆ
            จะเป็นแรงสำคัญในการขับเคลื่อนสังคมและประเทศข้างหน้า TEDxBangkok
            เป็นการจัดงานที่ไม่แสวงหาผลกำไรและดำเนินการโดยอาสาสมัครเป็นหลัก
            รายได้หลังหักค่าใช้จ่ายจะถูกทบไปใช้จัดงานในครั้งต่อ ๆ ไป
          </p>
          </Grid.Row>
        </Grid>
        </Segment>
      <Divider hidden />
      <Container>
        <Grid centered stackable>
          <Grid.Row>
            <h1> เกี่ยวกับ TED และ TEDx </h1>
          </Grid.Row>
          <Divider  />
          <Grid.Row columns={3} >
            { Content.map((card, idx) => (
              <Grid.Column key = "idx" >
              <Segment color={card.color}>
                <Header as='h2'>{card.topic}</Header>
                <p>{card.context}</p>
              </Segment>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    <ItemGroupWrapper>
    <Item.Group link>
      { Contact.map((item, idx) => (
        <Item key={idx}>
        <Icon name={item.icon} size={item.size}/>
        <Item.Content>
          <Item.Header> <a href= {item.link}>{item.name}</a></Item.Header>
          <Item.Description> {item.name}</Item.Description>
        </Item.Content>
      </Item>
      )) }
    </Item.Group>
    </ItemGroupWrapper>
  </Layout>
)

export default About
