import dynamic from "next/dynamic"
import MetaTags from "react-meta-tags"
import { Container, Grid } from "semantic-ui-react"
const NavbarAll = dynamic(import("./NavbarAll"), {
  loading: () => <p>loading</p>
})
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
      {isMobile == null ? (
        <NavbarAll pageName={props.pageName} isMobile={false} />
      ) : (
        <NavbarAll pageName={props.pageName} isMobile={isMobile} />
      )}
      <Container style={{ marginTop: "7em" }}>{props.children}</Container>
    </div>
  )
}

export default Layout
