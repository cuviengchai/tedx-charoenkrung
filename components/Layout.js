import Header from './Header'
import Footer from './Footer'
// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

const Layout = (props) => (
  // <div style={layoutStyle}>
  <div>
  <Header />
    {props.children}
  <Footer />
  </div>

)

export default Layout