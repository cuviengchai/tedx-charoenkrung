import Navbar from './Navbar'
import Footer from './Footer'
import MetaTags from 'react-meta-tags'
import Board from './Board'
// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

const Layout = (props) => (
  // <div style={layoutStyle}>
  <div>
    <MetaTags>
      <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' ></link>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </MetaTags>
  <Navbar />
    {props.children}
  <Footer />
  </div>

)

export default Layout