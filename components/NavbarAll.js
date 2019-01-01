import Link from "next/link"
import styled from "styled-components"
import { Menu, Container, Image } from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Item = styled.div`
  background-color: white;
  color: black;
  text-align: center;
  padding: 20px;
  :hover {
    color: gray;
  }
`
const SelectedItem = styled.div`
  background-color: white;
  color: red;
  text-align: center;
  padding: 20px;
`

const MenuItemStyle = styled(Menu.Item)`
  &.active {
    background-color: #fff !important;
    color: red !important;
  }
`

const NavbarMenu = styled(Menu)`
  background-color: #fff !important;
`

// const NavItem = ({ pageName, selected }) =>
//   pageName === selected ? (
//     <SelectedItem>{pageName}</SelectedItem>
//   ) : (
//     <Item>{pageName}</Item>
//   )

const Header = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: row;
  text-align: left;
  margin-right: auto;
  z-index: 10;
  background-color: white;
  width: 100%;
  top: 0;
  .im {
    text-align: right;
  }
  img {
    width: auto;
    height: 36px;
    margin: 5px 5px;
  }
  .content {
    text-align: left;
  }
  text-align: right;
  .burger{
    margin: 10px 5px;
    display: initial;
  }
  ul {
    display: flex:
    flex-direction: column;
    list-style-type: none;
    
  }
  @media only screen and (min-width: 1024px){
    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }
    .burger{
      display: none;
    }

  }
`

const NavbarItem = styled.li`
  &.active {
    color: red;
  }
  color: ${props => (props.active ? "red" : "black")};
  padding: 15px 10px;
  cursor: ${props => (props.active ? "" : "pointer")};
  &:hover {
    color: ${props => (props.active ? "red" : "gray")};
  }
`

class NavbarMobile extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return <div />
  }
}

class NavbarAll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.pageName,
      width: 0,
      isOpen: false
    }
  }

  pages = [
    { url: "/", pageName: "Home" },
    { url: "/video", pageName: "Video" },
    { url: "/content", pageName: "Content" },
    { url: "/attend", pageName: "Attend" },
    { url: "/", pageName: "Partner" },
    { url: "/about", pageName: "About" },
    { url: "/sponsors", pageName: "Sponsors" }
  ]

  componentDidMount() {
    window.addEventListener("resize", this.onResize)
    this._isMounted = true
    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
    this._isMounted = false
  }

  onResize = () => {
    if (this._isMounted) {
      this.setState({
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      })
    }
  }

  onToggleHamburger = () => {
    if (this.state.width < 1024) {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  renderNonMobile = () => (
    <div>
      <Header>
        <div className="im">
          <img src="static/images/tedx_logo_black.png" />
        </div>
        <div className="content">
          <FontAwesomeIcon
            icon="bars"
            color="black"
            size="lg"
            className="burger"
            onClick={this.onToggleHamburger}
          />
          <Fade collapse when={this.state.isOpen || this.state.width >= 1024}>
            <ul>
              {this.pages.map((page, idx) => (
                <Link href={page.url} key={"page-" + page.pageName}>
                  <NavbarItem
                    key={"item-" + idx}
                    active={this.state.selected === page.pageName}
                  >
                    {page.pageName}
                  </NavbarItem>
                </Link>
              ))}
            </ul>
          </Fade>
        </div>
      </Header>
    </div>
    // <Container>
    //   <NavbarMenu fixed="top" fluid={true} text stackable>
    //     <Menu.Item as="a">
    //       <Image
    //         size="tiny"
    //         src="static/images/tedx_logo_black.png"
    //         style={{ marginRight: "2em" }}
    //       />
    //     </Menu.Item>
    //     {this.pages.map(({ url, pageName }, index) => (
    //       <Link key={index} href={url}>
    //         <MenuItemStyle
    //           active={this.state.selected === pageName}
    //           key={index}
    //           onClick={() => this.setState({ selected: pageName })}
    //         >
    //           {pageName}
    //         </MenuItemStyle>
    //       </Link>
    //     ))}
    //   </NavbarMenu>
    // </Container>
  )

  render() {
    const { selected, isMobile } = this.state
    // return this.renderNonMobile()
    return <div>{isMobile ? <NavbarMobile /> : this.renderNonMobile()}</div>
  }
}

export default NavbarAll
