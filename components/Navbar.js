import Link from "next/link"
import styled from "styled-components"
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
  position: fixed;
  display: grid;
  grid-templates-columns: 1fr 1fr;
  grid-templates-rows: 1fr 1fr;
  grid-template-areas:
    "header-image burger"
    "header-content .";
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
  .burger {
    margin: 10px 5px;
    display: initial;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
  .dropdown {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-templates-columns: 1fr 1fr 1fr;
    grid-template-areas: "header-image burger header-content";
    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }
    .burger {
      display: none;
    }
  }
`

const NavbarItem = styled.li`
  justify-self: end;
  text-align: right;
  .dropdown-icon {
    margin-left: 0.5em;
  }
  &.active {
    color: red;
  }
  color: ${props => (props.active ? "red" : "black")};
  padding: 15px 10px;
  cursor: ${props => (props.active ? "" : "pointer")};
  &:hover {
    color: ${props => (props.active ? "red" : "gray")};
  }
  @media only screen and (max-width: 1023px) {
    justify-self: start;
    text-align: left;
  }
`

const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 1024px) {
    flex-direction: column;
`
const SubNavbarItems = styled.div`
display: flex;
flex-direction: row;
@media only screen and (min-width: 1024px) {
  flex-direction: column;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  ${NavbarItem} {
    text-align: center !important;
    background-color: white !important;

  }
`
const SubMenuComponent = props => {
  const mobileWidth = 1023
  const {
    width,
    selected,
    subSelected,
    pageName,
    subMenus,
    onDropDownClicked,
    isActive
  } = props
  return (
    <SubMenu>
      <NavbarItem
        key={"item-" + pageName}
        active={selected === pageName}
        onClick={() => onDropDownClicked(pageName)}
      >
        {pageName}
        <FontAwesomeIcon
          icon={
            width <= mobileWidth
              ? isActive
                ? "caret-left"
                : "caret-right"
              : isActive
              ? "caret-up"
              : "caret-down"
          }
          color="black"
          size="small"
          className="dropdown-icon"
          key={"dropdown-icon-" + pageName}
        />
      </NavbarItem>
      <Fade
        left={width <= mobileWidth ? true : false}
        down={width > mobileWidth ? true : false}
        distance={width > mobileWidth ? "30%" : "30%"}
        duration={500}
        collapse
        when={isActive}
        key={"fade-" + pageName}
      >
        <SubNavbarItems key={"subNavbarItems-" + pageName}>
          {subMenus.map(subMenu => (
            <Link
              href={subMenu.link}
              key={"link-" + pageName + "-" + subMenu.subPageName}
            >
              <NavbarItem
                key={"sub-item-" + pageName + "-" + subMenu.link}
                active={
                  pageName === selected && subMenu.subPageName === subSelected
                }
              >
                {subMenu.subPageName}
              </NavbarItem>
            </Link>
          ))}
        </SubNavbarItems>
      </Fade>
    </SubMenu>
  )
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.pageName,
      subSelected: this.props.subPageName ? this.props.subPageName : "",
      width: 0,
      isOpen: false,
      currentDropdown: "",
      dropDownOpen: false,
      pages: [
        { url: "/", pageName: "Home" },
        {
          url: "/watch",
          pageName: "Watch",
          subMenus: [
            { subPageName: "2017", link: "" },
            { subPageName: "2019", link: "" }
          ]
        },
        { url: "/read", pageName: "Read" },
        {
          url: "/attend",
          pageName: "Attend",
          subMenus: [
            { subPageName: "2017", link: "/attend?year=2017" },
            { subPageName: "2019", link: "/attend?year=2019" }
          ]
        },
        { url: "/about", pageName: "About" },
        {
          url: "/partnership",
          pageName: "Partnerships",
          subMenus: [
            { subPageName: "2017", link: "/partnership?year=2017" },
            { subPageName: "2019", link: "/partnership?year=2019" }
          ]
        }
      ]
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize)
    this._isMounted = true
    this.setState({
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    })

    this.onResize()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
    this._isMounted = false
  }

  onResize = () => {
    this.setState({ isOpen: false, partnershipsOpen: false })
    if (this._isMounted) {
      const newWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      this.setState({
        width: newWidth
      })
      this.setState({ isOpen: false, dropDownOpen: false })
    }
  }

  onToggleHamburger = () => {
    if (this.state.width < 1024) {
      this.setState({ isOpen: !this.state.isOpen, dropDownOpen: false })
    }
  }

  onDropDownClicked = pageName => {
    if (pageName !== this.state.currentDropdown && this.state.dropDownOpen) {
      this.setState({
        currentDropdown: pageName
      })
    } else {
      this.setState({
        currentDropdown: pageName,
        dropDownOpen: !this.state.dropDownOpen
      })
    }
  }

  renderNonMobile = () => {
    // const mobileWidth = 1023
    const {
      width,
      pages,
      selected,
      subSelected,
      dropDownOpen,
      currentDropdown
    } = this.state
    return (
      <div>
        <Header>
          <HeaderImage>
            <img src="static/images/tedx_logo_black.png" />
          </HeaderImage>
          <HeaderContent>
            <Fade collapse when={this.state.isOpen || this.state.width >= 1024}>
              <ul>
                {pages.map((page, idx) => (
                  <div>
                    {page.subMenus ? (
                      <SubMenuComponent
                        width={width}
                        selected={selected}
                        subSelected={subSelected}
                        pageName={page.pageName}
                        subMenus={page.subMenus}
                        onDropDownClicked={this.onDropDownClicked}
                        isActive={
                          dropDownOpen && page.pageName === currentDropdown
                        }
                      />
                    ) : (
                      <Link href={page.url} key={"page-" + page.pageName}>
                        <NavbarItem
                          key={"item-" + idx}
                          active={this.state.selected === page.pageName}
                        >
                          {page.pageName}
                        </NavbarItem>
                      </Link>
                    )}
                  </div>
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
  }

  render() {
    return this.renderNonMobile()
  }
}

export default Navbar
