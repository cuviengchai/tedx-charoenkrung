import { Image, Segment, Grid, Container } from "semantic-ui-react"

const footerImages = [
  "static/images/tedx_charoenkrung.jpg",
  "static/images/tedx_charoenkrung.jpg",
  "static/images/tedx_charoenkrung.jpg",
  "static/images/tedx_charoenkrung.jpg"
]

const Footer = () => (
  <Segment
    inverted
    vertical
    style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
  >
    <Container textAlign="center">
      <Grid inverted stackable>
        <Grid.Row centered={true} columns={4}>
          {footerImages.map((imageUrl, index) => (
            <Grid.Column width={3} key={index}>
              <Image src="static/images/tedx_charoenkrung.jpg" size="medium" />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
  // <footer className="footer has-background-dark">
  //   <div className="content has-text-centered">
  //     <div className="columns is-mobile">
  //       <div className="column">
  //         <Image src="static/images/tedx_charoenkrung.jpg" />
  //       </div>
  //       <div className="column">
  //         <Image src="static/images/tedx_charoenkrung.jpg" />
  //       </div>
  //       <div className="column">
  //         <Image src="static/images/tedx_charoenkrung.jpg" />
  //       </div>
  //       <div className="column">
  //         <Image src="static/images/tedx_charoenkrung.jpg" />
  //       </div>
  //     </div>
  //   </div>
  // </footer>
  // <div>This is footer</div>
)
export default Footer
