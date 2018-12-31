import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fade from "react-reveal/Fade"

const staticSize = (width, height) => `width: ${width};
height: ${height};
max-width: ${width};
max-height: ${height};
min-width: ${width};
min-height: ${height};`

const Header = styled.nav`
  position: sticky;
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 0px 20px;
  max-width: 100vw;
  hr.min-active {
    width: 100%;
    display: block;
  }
  img {
    ${staticSize("50px", "62.5px")}
    margin-bottom: 5px;
  }
  .burger {
    position: absolute;
    top: 20px;
    right: 20px;
    transform: scale(0.8);
    &.active {
      filter: brightness(0.7);
    }
    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: flex-start;
    padding: 0px;
    margin: 0px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0px;
      &.lang {
        div {
          height: 2rem;
          line-height: 2rem;
        }
      }
      &.active {
        filter: brightness(0.7);
      }
      &:hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
      &.lang {
        align-self: flex-end;
        filter: none;
        div.active {
          filter: brightness(0.7);
        }
        div:hover {
          cursor: pointer;
          filter: brightness(0.8);
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 70px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    hr.min-active {
      display: none;
    }
    img {
      ${staticSize("45px", "55.4px")}
      margin-right: 20px;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }

      &:active {
        filter: brightness(0.8);
      }
    }
    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ul {
      display: flex;
      list-style: none;
      padding: 0px;
      flex-direction: row;
      align-items: center;
      li {
        margin: 0px 15px;
        &.lang {
          align-self: none;
        }
      }
    }
  }
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      width: -1
    }
  }
  // Set up js width handler
  onResize = e => {
    if (this._isMounted) {
      this.setState({
        width: document.body.clientWidth
      })
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.onResize)
    this._isMounted = true
    this.onResize()
  }
  componentWillUnmount() {
    this._isMounted = false
    window.removeEventListener("resize", this.onResize)
  }
  // Toggle Hamburger Button
  onToggleHamburger = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  // How component response to width change (change orientation)
  componentDidUpdate(prevProps, prevState) {
    if (this.state.width !== prevState.width) {
      this.setState({ isOpen: false })
    }
  }
  render() {
    return (
      <Header>
        <img alt="logo" src="/static/logo/logo.png" />

        <Fade collapse when={this.state.isOpen || this.state.width >= 1024}>
          <ul>
            <li>Lorem ipsum 1</li>
            <li>Lorem ipsum 2</li>
          </ul>
        </Fade>

        {this.state.width < 1024 && (
          <FontAwesomeIcon
            icon="bars"
            color="#FFF"
            size="2x"
            className="burger"
            onClick={this.onToggleHamburger}
          />
        )}
      </Header>
    )
  }
}
