import React from "react"
import styled from "styled-components"
import { Grid, Image, Modal, Button } from "semantic-ui-react"

const DotsMatterHeader = styled.div`
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: -0.6px;
  text-align: center;
  color: #000000;
  font-family: "Helvetica Neue";
  grid-area: header;
  @media only screen and (max-width: 1023px) {
    text-align: left;
  }
`

const DotsMatterInfo = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  font-family: "Helvetica Neue";
  @media only screen and (max-width: 1023px) {
    text-align: left;
  }
`

const DotsMatterIcon = styled(Image)`
  padding-bottom: 2.5em;
  margin: 1em auto;
  @media only screen and (max-width: 1023px) {
    margin-top: 1em;
    margin-bottom: 0;
    padding-bottom: 1em;
  }
`

const DotsMatterImages = styled(Image)`
  margin-top: 1em;
  padding-bottom: 2.5em;
`

const DotsMatterAllHeader = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-rows: auto auto;
  // text-align: center;
  @media only screen and (max-width: 1023px) {
    grid-row-gap: 2em;
  }
`
const YearContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "first-col second-col";
  grid-column-gap: 2em;
  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    // grid-row-gap: 2em;
    grid-template-areas:
      "first-col"
      "second-col";
  }
`

const DotsMatterGallery = styled(Grid)`
  display: flex !important;
  flex-direction: row;
  @media only screen and (max-width: 1023px) {
    display: none !important;
  }
`
const DotsMatterGalleryMobile = styled(Grid)`
  display: none !important;
  @media only screen and (max-width: 1023px) {
    display: flex !important;
    flex-direction: row;
  }
`

const DotsMatterGalleryModal = styled(Modal)`
  margin: 0 auto !important;
  // top: auto !important;
  // left: auto !important;
  top: 20% !important;
  // bottom: auto !important;
  left: 20% !important;
  // right: auto !important;
  transform-origin: center !important;
`

const DotsMatterDetail = styled.div`
  word-wrap: break-word;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  font-family: "Helvetica Neue";
  margin: 1em 0em;
`

const DotsMatter = props => {
  const quotes = [
    "static/images/attend/quote1.jpg",
    "static/images/attend/quote2.jpg",
    "static/images/attend/quote3.jpg"
  ]
  return (
    <div>
      <DotsMatterAllHeader>
        <div className="year">
          <DotsMatterHeader>TEDxCharoenkrung 2017</DotsMatterHeader>
          <DotsMatterInfo>17 December 2017 </DotsMatterInfo>
          <DotsMatterInfo>WAREHOUSE30</DotsMatterInfo>
          <DotsMatterInfo>Talk: 12.00-18.00</DotsMatterInfo>
          {/* <DotsMatterHeader> READY SET GROW</DotsMatterHeader> */}

          <YearContent>
            <div className="first-col">
              <DotsMatterIcon
                src="static/images/attend/ReadySetGrow.png"
                size="large"
              />
            </div>
            <div className="second-col">
              <DotsMatterDetail>
                Ready Set Grow ทุกครั้งก่อนที่เราจะออกวิ่งไปสู่เส้นชัย
                เราต้องเตรียมตัวให้พร้อมก่อนเสมอ
                เช่นเดียวกับการออกวิ่งไปสู่การเปลี่ยนแปลงหรือเป้าหมายของชีวิตที่เราตั้งไว้
                มี3ขั้นตอนที่จะทำให้เราไปถึงเป้าหมายได้อย่างสมบูรณ์ <br />
                <br />
                ‘Ready’ หากคุณเป็นหนึ่งคนที่อยากเปลี่ยนแปลง เตรียมตัวให้พร้อม
                <br />
                <br /> ‘Set’ มองไปข้างหน้า กำหนดเป้าหมายของคุณให้ชัดเจน
                แล้วเริ่มทำมันซะ <br />
                <br />
                ‘Grow’ เรียนรู้ เปลี่ยนแปลง และเติบโต <br />
                <br />
                TEDxCharoenkrung
                ขอเป็นแรงผลักดันให้เรามาช่วยกันกำหนดอนาคตผ่านทอล์กอันทรงพลังของเหล่าสปีกเกอร์
                และกิจกรรมดีๆ เพื่อสร้างชุมชนของ “คนลงมือทำ” และก้าวเข้าสู่
                “กรุงเจริญ” ไปด้วยกัน
              </DotsMatterDetail>
              <Button color="red" fluid>
                Watch Videos
              </Button>
            </div>
          </YearContent>
        </div>
        <div className="year">
          <DotsMatterHeader>TEDxCharoenkrung 2018</DotsMatterHeader>
          <DotsMatterInfo>Theme: DOTS MATTER</DotsMatterInfo>
          <DotsMatterInfo>27 January 2019</DotsMatterInfo>
          <DotsMatterInfo>At Prince Rama Theater</DotsMatterInfo>
          <DotsMatterInfo>Talk: 13.00 - 18.00</DotsMatterInfo>
          <DotsMatterInfo>After Party: 18.00 - 21.00</DotsMatterInfo>
          <YearContent>
            <div className="first-col">
              <DotsMatterIcon
                src="static/images/attend/DotsMatter.png"
                size="large"
              />
            </div>
            <div className="second-col">
              {/* <DotsMatterHeader>Why Dots Matter?</DotsMatterHeader> */}
              <DotsMatterDetail>
                จุดเล็กๆ แต่ละจุดอยู่กระจายกันออกไป
                อาจจะสามารถสร้างการเปลี่ยนแปลงให้กับสิ่งรอบๆตัวได้ในระดับหนึ่ง
                แต่เมื่อใดก็ตามที่จุดแต่ละจุดมาอยู่รวมกัน
                การเปลี่ยนแปลงที่ยิ่งใหญ่จะสามารถเกิดขึ้นได้อย่างแน่นอน <br />
                <br />
                Dots = people <br />
                <br />
                TEDxCharoenkrung เชื่อว่าคนหนึ่งคนเปรียบเสมือนจุดหนึ่งจุด
                มีจุดเล็กจุดใหญ่บ้างปะปนกันไปในสังคมไทย การรวมกลุ่มกันของจุดนั้น
                เป็นจุดเริ่มต้นสำคัญที่จะช่วยผลักดันให้เกิดพลังและแรงกระเพื่อมให้สังคมไทยเปลี่ยนแปลงไปในทิศทางที่ดีขึ้นได้
                ได้ลงมือทำในสิ่งที่อยากและร่วมกันสร้างสังคมในแบบที่หวังไปด้วยกัน
              </DotsMatterDetail>
            </div>
          </YearContent>
        </div>
      </DotsMatterAllHeader>
      <DotsMatterGallery columns={3}>
        {quotes.map((quote, idx) => (
          <Grid.Column key={"quote-nonmobile-" + idx}>
            <DotsMatterImages src={quote} size="medium" />
          </Grid.Column>
        ))}
      </DotsMatterGallery>
      <DotsMatterGalleryMobile columns={3}>
        {quotes.map((quote, idx) => (
          <Grid.Column key={"quote-mobile-" + idx}>
            <DotsMatterGalleryModal
              trigger={<DotsMatterImages src={quote} size="medium" />}
              basic
              size="medium"
              centered
            >
              <Modal.Content>
                <Image src={quote} size="large" />
              </Modal.Content>
            </DotsMatterGalleryModal>
          </Grid.Column>
        ))}
      </DotsMatterGalleryMobile>
    </div>
  )
}

export default DotsMatter