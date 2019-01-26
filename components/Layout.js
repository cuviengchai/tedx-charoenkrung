import dynamic from "next/dynamic"
import MetaTags from "react-meta-tags"
import { Container } from "semantic-ui-react"
import styled from "styled-components"

const Content = styled.div`
  /* min-height: 100rm !important; */
  min-height: calc(100vh - 220px);
`

const Navbar = dynamic(import("./Navbar"), {
  loading: () => <p>loading</p>
})
import Footer from "./Footer"

const Layout = props => {
  const { isMobile } = props
  return (
    // <div style={layoutStyle}>
    <div>
      <MetaTags>
        {/* <link rel="stylesheet" type="text/css" href="/static/css/bulma.css" /> */}
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </MetaTags>
      <Navbar
        pageName={props.pageName}
        subPageName={props.subPageName ? props.subPageName : ""}
      />
      <Content>
        <Container style={{ marginTop: "7em" }}>{props.children}</Container>
      </Content>
      <Footer />
    </div>
  )
}

export default Layout
