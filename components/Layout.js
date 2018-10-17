import Navbar from './Navbar'
import Footer from './Footer'
import Board from './Board'
// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

const Layout = (props) => (
  // <div style={layoutStyle}>
  <div>
  <Navbar />
    {props.children}
  <Footer />
  </div>

)

export default Layout