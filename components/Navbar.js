import Link from "next/link"
import styled from "styled-components"
import { Menu, Container, Image } from "semantic-ui-react"

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
  background-color: red;
  color: white;
  text-align: center;
  padding: 20px;
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
    { url: "/video", pageName: "Video" },
    { url: "/", pageName: "Content" },
    { url: "/", pageName: "Partner" },
    { url: "/about", pageName: "About" },
    { url: "/sponsors", pageName: "Sponsors" }
  ]
  render() {
    const { selected } = this.state
    return (
      <Menu fixed="top" fluid="true" size="small">
        <Container>
          <Menu.Item as="a">
            <Image
              size="tiny"
              src="static/images/tedx_logo_black.png"
              style={{ marginRight: "2em" }}
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
    )
  }
}

export default Navbar
