import Link from "next/link"
import styled from "styled-components"
import { Menu, Container, Image } from "semantic-ui-react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderImage = styled.div`
  grid-area: header-image;
  justify-self: start;
  align-self: center;
`

const HeaderContent = styled.div`
  grid-area: header-content;
  justify-self: start;
  align-self: center;
  @media only screen and (min-width: 1024px) {
    justify-self: end;
  }
`
const Burger = styled.div`
  margin-right: 1em;
  grid-area: burger;
  justify-self: end;
  align-self: center;
`

const Header = styled.nav`
  // display: flex;
  position: fixed;
  display: grid;
  grid-templates-columns: 1fr 1fr;
  grid-templates-rows: 1fr 1fr;
  grid-template-areas: 
    "header-image burger"
    "header-content ."
  ;
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
    display: grid;
    grid-templates-columns: 1fr 1fr;
    grid-templates-rows: 1fr 1fr;
    grid-template-areas:
      "header-image header-content";
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

class Navbar extends React.Component {
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
    { url: "/partnership", pageName: "Partnerships" }
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
        <HeaderImage>
          <img src="static/images/tedx_logo_black.png" />
        </HeaderImage>
        <HeaderContent>
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
        </HeaderContent>
        <Burger>
          <FontAwesomeIcon
            icon="bars"
            color="black"
            size="lg"
            className="burger"
            onClick={this.onToggleHamburger}
          />
        </Burger>
      </Header>
    </div>
  )

  render() {
    return this.renderNonMobile()
  }
}

export default Navbar
