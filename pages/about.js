import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
const Background = styled.div`
    background-color: #d7f4ea;
`
const Container = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: 10%;
    margin-left: 10%;
`
const Title = styled.div`
    display:flex;
    flex-direction:column;
`
const TitleHeader = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 4rem;

`
const TitleBody = styled.div`
    display:flex;
`
const ContentHeader = styled.div`
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

const ContentColumn = styled.div`
    display:flex;
    flex-direction:column;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 30rem;
`
const Contact = styled.div`

`
const About = (props) =>(
    <Layout>
        <Background>
        <Container>
            <Title>
                <TitleHeader>
                    <h1 className="title is-1"> TEDXCharoenkrung</h1>
                    <h2 className="subtitle is-3">- about team-</h2>
                </TitleHeader>
                <TitleBody>
                <p>TEDxBangkok เป็นแพลตฟอร์มที่ต่อยอด “ไอเดียที่ควรค่าแก่การเผยแพร่” จากระดับนานาชาติสู่กรุงเทพฯ 
                    จัดขึ้นครั้งแรกเมื่อปี 2015 โดยการรวมทีมของผู้ที่หลงใหลใน TED Talks โดยเฉพาะ TEDx organizers 
                    และสมาชิก TED Open Translation Project ที่เล็งเห็นถึงความสำคัญในการเผยแพร่ความคิดที่หลากหลาย 
                    และเชื่อว่าเนื้อหาความรู้และความคิดใหม่ ๆ จะเป็นแรงสำคัญในการขับเคลื่อนสังคมและประเทศข้างหน้า
                    TEDxBangkok เป็นการจัดงานที่ไม่แสวงหาผลกำไรและดำเนินการโดยอาสาสมัครเป็นหลัก 
                    รายได้หลังหักค่าใช้จ่ายจะถูกทบไปใช้จัดงานในครั้งต่อ ๆ ไป</p>
                </TitleBody>
            </Title>
            <hr />
            <ContentHeader>
                <h1 className="title is-2">เกี่ยวกับ TED และ TEDx</h1>
            </ContentHeader>
            <Content>
                <ContentColumn>
                    <h1 className="title is-3"> TED คืออะไร ? </h1>
                    <p>
                        TED เป็นองค์กรไม่แสวงหาผลกำไรที่ก่อตั้งขึ้นเพื่อเผยแพร่แนวความคิดใหม่ ๆ 
                        ผ่านรูปแบบของ TED Talk ที่มีความยาวไม่เกิน 18 นาที TED เริ่มต้นในปี 1984 
                        ในรูปแบบของการสัมมนา ภายใต้หัวข้อเทคโนโลยี ความบันเทิง และการออกแบบ 
                        และมีการจัดงานอย่างต่อเนื่อง จนปัจจุบันนี้ TED Talk ครอบคลุมหัวข้อในเกือบทุกศาสตร์ 
                        ตั้งแต่ด้านวิทยาศาสตร์ ธุรกิจ ไปจนถึงประเด็นน่าคิดรอบโลก โดยได้รับการแปลไปกว่า 100 ภาษาแล้ว
                    </p>
                    <br />
                    <h1 className="title is-3"> TED และ TEDx ต่างกันอย่างไร?</h1>
                    <p>
                        TED เป็นงานสัมมนาที่จัดขึ้นโดย TED Conferences LLC ประเทศสหรัฐอเมริกา ส่วนงาน TEDx เป็นงานที่จัดขึ้นโดยอาสาสมัครในระดับท้องถิ่น ภายใต้ใบอนุญาตและแนวทางการจัดงานจาก TED Conferences LLC
                    </p>
                    <br />
                    <h1 className="title is-3"> งาน TEDx ภายใต้ชื่อต่างๆ ถูกจัดโดยทีมเดียวกัน? </h1>
                    <p>
                        ไม่ใช่ งาน TEDx ต่างๆ ในประเทศไทยล้วนแล้วถูกจัดขึ้นอย่างเป็นเอกเทศ โดยมีผู้ถือใบอนุญาตต่างท่าน และทีมงานแตกต่างกันออกไป
                    </p>
                </ContentColumn>
                <ContentColumn>
                    <h1 className="title is-3"> TED คืออะไร ? </h1>
                    <p>
                    TEDx เป็นโครงการที่ถูกริเริ่มขึ้นเพื่อสานต่อเจตนารมย์ของ TED ที่เชื่อว่าความคิดดีๆ ควรถูกเผยแพร่ออกไปในวงกว้าง งาน TEDx จะถูกจัดขึ้นอย่างอิสระโดยอาสาสมัครในชุมชนหรือเมืองนั้น ๆ เพื่อให้ผู้คนในชุมชนได้มีโอกาสรับประสบการณ์ที่ใกล้เคียงกับงาน TED ให้มากที่สุด งานที่จัดขึ้นที่กรุงเทพฯ ครั้งนี้ถูกจัดภายใต้ชื่อ TEDxBangkok โดย x หมายถึงงาน TED ที่ถูกจัดขึ้นอย่างอิสระ ในงาน TEDxBangkok จะมีทั้งการฉายวีดีโอ TEDTalks และการพูดโดยผู้พูดที่จะจุดชนวนให้เกิดความสัมพันธ์และการพูดคุยสนทนาที่ลึกซึ้ง งาน TEDx ทั้งหมดจัดขึ้นโดยคนในท้องที่ โดยมี TED Conferences เป็นผู้กำหนดแนวทางในการจัดงาน
                    </p>
                </ContentColumn>
            </Content>
            <Contact>
            <h1 className="title is-3"> Contact</h1>
            <p > Email : <a href="#">  This is Email </a></p>
            <p > Facebook : <a href="#">  This is Facebook.com </a></p>
            <p > etc : <a href="#">  This is ETC </a></p>
            </Contact>
        </Container>
        </Background>
    </Layout>
)

export default About