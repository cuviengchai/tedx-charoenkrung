import Link from "next/link"
import styled from "styled-components"
import { Menu, Container, Image } from "semantic-ui-react"

const Item = styled.div`
  background-color: white
  color: black
  text-align: center
  padding: 20px
  :hover {
    color: gray;
  }
`
const SelectedItem = styled.div`
  background-color: red
  color: white
  text-align: center
  padding: 20px
`

const MenuItemStyle = styled(Menu.Item)`
  &.active {
    background-color: #db2828 !important;
    color: #fff !important;
  }
`

const NavItem = ({ pageName, selected }) =>
  pageName === selected ? (
    <SelectedItem>{pageName}</SelectedItem>
  ) : (
    <Item>{pageName}</Item>
  )

class Navbar extends React.Component {
  state = { selected: this.props.pageName }
  pages = [
    { url: "/", pageName: "Home" },
    { url: "/", pageName: "Video" },
    { url: "/", pageName: "Content" },
    { url: "/", pageName: "Partner" },
    { url: "/", pageName: "About" },
    { url: "/sponsors", pageName: "Sponsors" }
  ]
  render() {
    const { selected } = this.state
    return (
      // <Menu inverted>
      //   {colorsA.map(c => (
      //     <Menu.Item
      //       key={c}
      //       name={c}
      //       active={activeA === c}
      //       color={c}
      //       onClick={() => this.setState({ activeA: c })}
      //     />
      //   ))}
      // </Menu>
      <Menu fixed="top" color="white">
        <Container>
          <Menu.Item as="a">
            <Image
              size="small"
              src="static/images/tedx_logo_black.png"
              style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
          {this.pages.map(({ url, pageName }, index) => (
            <Link key={index} href={url}>
              <MenuItemStyle
                active={selected === pageName}
                key={index}
                onClick={() => this.setState({ selected: pageName })}
              >
                {pageName}
              </MenuItemStyle>
            </Link>
          ))}
        </Container>
      </Menu>
      // <nav class="navbar" role="navigation" aria-label="main navigation">
      //   <div class="navbar-brand">
      //     <a class="navbar-item" href="https://bulma.io">
      //       <img src="static/images/tedx_logo_black.png" />
      //     </a>
      //     <a
      //       role="button"
      //       class="navbar-burger"
      //       aria-label="menu"
      //       aria-expanded="false"
      //     >
      //       <span aria-hidden="true" />
      //       <span aria-hidden="true" />
      //       <span aria-hidden="true" />
      //     </a>
      //   </div>
      //   <div class="navbar-menu">
      //     <div class="navbar-start">
      //       {this.pages.map(({ url, pageName }, index) => (
      //         <Link key={index} href={url}>
      //           <a onClick={() => this.setState({ selected: pageName })}>
      //             <NavItem pageName={pageName} selected={selected} />
      //           </a>
      //         </Link>
      //       ))}
      //     </div>
      //     <div class="navbar-end" />
      //   </div>
      // </nav>
    )
  }
}

export default Navbar
