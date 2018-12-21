import dynamic from 'next/dynamic'
import MetaTags from "react-meta-tags"
import { Container } from "semantic-ui-react"
const Navbar = dynamic( import('./Navbar'),
  {
    loading: () => (<p>loading</p>)
  }
)
const Layout = props => (
  // <div style={layoutStyle}>
  <div>
    <MetaTags>
      {/* <link rel="stylesheet" type="text/css" href="/static/css/bulma.css" /> */}
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </MetaTags>
    <Navbar pageName={props.pageName} />
    <Container style={{ marginTop: "7em" }}>{props.children}</Container>
  </div>
)

export default Layout
