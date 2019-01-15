import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { Grid, Image, Button } from "semantic-ui-react"
import Modal from "react-modal"

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
  margin: ${props => (props.minusMargin ? "-1em 1em auto auto" : "1em auto")};
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
    grid-row-gap: 4em;
  }
`
const YearContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "first-col second-col";
  grid-column-gap: 2em;
  margin: 1em 0em;
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
}

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

class DotsMatter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: props.year,
      quotes: [
        "static/images/attend/quote1.jpg",
        "static/images/attend/quote2.jpg",
        "static/images/attend/quote3.jpg"
      ],
      modalIsOpen: false,
      activeImageUrl: ""
    }
  }

  onGalleryImageClicked = url => {
    this.setState({ activeImageUrl: url }, this.setState({ modalIsOpen: true }))
  }

  closeModal = () => {
    this.setState({ activeImageUrl: "" }, this.setState({ modalIsOpen: false }))
  }

  render() {
    console.log("LOL: ", this.state.year)
    const { year, quotes, activeImageUrl } = this.state
    if (year == "2017") {
      return (
        <div>
          <DotsMatterAllHeader>
            <div className="year">
              <DotsMatterHeader>TEDxCharoenkrung 2017</DotsMatterHeader>
              <DotsMatterInfo>17 December 2017 </DotsMatterInfo>
              <DotsMatterInfo>WAREHOUSE30</DotsMatterInfo>
              <YearContent>
                <div className="first-col">
                  <DotsMatterIcon
                    src="static/images/attend/ReadySetGrow.png"
                    size="large"
                    minusMargin={true}
                  />
                </div>
                <div className="second-col">
                  <DotsMatterDetail>
                    Ready Set Grow ทุกครั้งก่อนที่เราจะออกวิ่งไปสู่เส้นชัย
                    เราต้องเตรียมตัวให้พร้อมก่อนเสมอ
                    เช่นเดียวกับการออกวิ่งไปสู่การเปลี่ยนแปลงหรือเป้าหมายของชีวิตที่เราตั้งไว้
                    มี 3 ขั้นตอนที่จะทำให้เราไปถึงเป้าหมายได้อย่างสมบูรณ์ <br />
                    <br />
                    ‘Ready’ หากคุณเป็นหนึ่งคนที่อยากเปลี่ยนแปลง
                    เตรียมตัวให้พร้อม
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
                  <Link href="/video">
                    <Button color="red" fluid>
                      Watch Videos
                    </Button>
                  </Link>
                </div>
              </YearContent>
            </div>
          </DotsMatterAllHeader>
        </div>
      )
    } else if (year == "2019") {
      return (
        <div>
          <DotsMatterAllHeader>
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
                    การเปลี่ยนแปลงที่ยิ่งใหญ่จะสามารถเกิดขึ้นได้อย่างแน่นอน{" "}
                    <br />
                    <br />
                    Dots = people <br />
                    <br />
                    TEDxCharoenkrung เชื่อว่าคนหนึ่งคนเปรียบเสมือนจุดหนึ่งจุด
                    มีจุดเล็กจุดใหญ่บ้างปะปนกันไปในสังคมไทย
                    การรวมกลุ่มกันของจุดนั้น
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
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
              <Image src={activeImageUrl} size="large" />
            </Modal>
            {quotes.map((quote, idx) => (
              <Grid.Column key={"quote-mobile-" + idx}>
                <DotsMatterImages
                  src={quote}
                  size="medium"
                  onClick={() => {
                    this.onGalleryImageClicked(quote)
                  }}
                />
              </Grid.Column>
            ))}
          </DotsMatterGalleryMobile>
        </div>
      )
    } else {
      return <div>fail</div>
    }
    // return (
    //   <div>
    //     <DotsMatterAllHeader>
    //       <div className="year">
    //         <DotsMatterHeader>TEDxCharoenkrung 2017</DotsMatterHeader>
    //         <DotsMatterInfo>17 December 2017 </DotsMatterInfo>
    //         <DotsMatterInfo>WAREHOUSE30</DotsMatterInfo>
    //         <DotsMatterInfo>Talk: 12.00-18.00</DotsMatterInfo>
    //         {/* <DotsMatterHeader> READY SET GROW</DotsMatterHeader> */}

    //         <YearContent>
    //           <div className="first-col">
    //             <DotsMatterIcon
    //               src="static/images/attend/ReadySetGrow.png"
    //               size="large"
    //             />
    //           </div>
    //           <div className="second-col">
    //             <DotsMatterDetail>
    //               Ready Set Grow ทุกครั้งก่อนที่เราจะออกวิ่งไปสู่เส้นชัย
    //               เราต้องเตรียมตัวให้พร้อมก่อนเสมอ
    //               เช่นเดียวกับการออกวิ่งไปสู่การเปลี่ยนแปลงหรือเป้าหมายของชีวิตที่เราตั้งไว้
    //               มี 3 ขั้นตอนที่จะทำให้เราไปถึงเป้าหมายได้อย่างสมบูรณ์ <br />
    //               <br />
    //               ‘Ready’ หากคุณเป็นหนึ่งคนที่อยากเปลี่ยนแปลง เตรียมตัวให้พร้อม
    //               <br />
    //               <br /> ‘Set’ มองไปข้างหน้า กำหนดเป้าหมายของคุณให้ชัดเจน
    //               แล้วเริ่มทำมันซะ <br />
    //               <br />
    //               ‘Grow’ เรียนรู้ เปลี่ยนแปลง และเติบโต <br />
    //               <br />
    //               TEDxCharoenkrung
    //               ขอเป็นแรงผลักดันให้เรามาช่วยกันกำหนดอนาคตผ่านทอล์กอันทรงพลังของเหล่าสปีกเกอร์
    //               และกิจกรรมดีๆ เพื่อสร้างชุมชนของ “คนลงมือทำ” และก้าวเข้าสู่
    //               “กรุงเจริญ” ไปด้วยกัน
    //             </DotsMatterDetail>
    //             <Link href="/video">
    //               <Button color="red" fluid>
    //                 Watch Videos
    //               </Button>
    //             </Link>
    //           </div>
    //         </YearContent>
    //       </div>
    //       <div className="year">
    //         <DotsMatterHeader>TEDxCharoenkrung 2018</DotsMatterHeader>
    //         <DotsMatterInfo>Theme: DOTS MATTER</DotsMatterInfo>
    //         <DotsMatterInfo>27 January 2019</DotsMatterInfo>
    //         <DotsMatterInfo>At Prince Rama Theater</DotsMatterInfo>
    //         <DotsMatterInfo>Talk: 13.00 - 18.00</DotsMatterInfo>
    //         <DotsMatterInfo>After Party: 18.00 - 21.00</DotsMatterInfo>
    //         <YearContent>
    //           <div className="first-col">
    //             <DotsMatterIcon
    //               src="static/images/attend/DotsMatter.png"
    //               size="large"
    //             />
    //           </div>
    //           <div className="second-col">
    //             {/* <DotsMatterHeader>Why Dots Matter?</DotsMatterHeader> */}
    //             <DotsMatterDetail>
    //               จุดเล็กๆ แต่ละจุดอยู่กระจายกันออกไป
    //               อาจจะสามารถสร้างการเปลี่ยนแปลงให้กับสิ่งรอบๆตัวได้ในระดับหนึ่ง
    //               แต่เมื่อใดก็ตามที่จุดแต่ละจุดมาอยู่รวมกัน
    //               การเปลี่ยนแปลงที่ยิ่งใหญ่จะสามารถเกิดขึ้นได้อย่างแน่นอน <br />
    //               <br />
    //               Dots = people <br />
    //               <br />
    //               TEDxCharoenkrung เชื่อว่าคนหนึ่งคนเปรียบเสมือนจุดหนึ่งจุด
    //               มีจุดเล็กจุดใหญ่บ้างปะปนกันไปในสังคมไทย
    //               การรวมกลุ่มกันของจุดนั้น
    //               เป็นจุดเริ่มต้นสำคัญที่จะช่วยผลักดันให้เกิดพลังและแรงกระเพื่อมให้สังคมไทยเปลี่ยนแปลงไปในทิศทางที่ดีขึ้นได้
    //               ได้ลงมือทำในสิ่งที่อยากและร่วมกันสร้างสังคมในแบบที่หวังไปด้วยกัน
    //             </DotsMatterDetail>
    //           </div>
    //         </YearContent>
    //       </div>
    //     </DotsMatterAllHeader>
    //     <DotsMatterGallery columns={3}>
    //       {quotes.map((quote, idx) => (
    //         <Grid.Column key={"quote-nonmobile-" + idx}>
    //           <DotsMatterImages src={quote} size="medium" />
    //         </Grid.Column>
    //       ))}
    //     </DotsMatterGallery>
    //     <DotsMatterGalleryMobile columns={3}>
    //       <Modal
    //         isOpen={this.state.modalIsOpen}
    //         onRequestClose={this.closeModal}
    //         style={customStyles}
    //       >
    //         <Image src={activeImageUrl} size="large" />
    //       </Modal>
    //       {quotes.map((quote, idx) => (
    //         <Grid.Column key={"quote-mobile-" + idx}>
    //           <DotsMatterImages
    //             src={quote}
    //             size="medium"
    //             onClick={() => {
    //               this.onGalleryImageClicked(quote)
    //             }}
    //           />
    //         </Grid.Column>
    //       ))}
    //     </DotsMatterGalleryMobile>
    //   </div>
    // )
  }
}

export default DotsMatter
