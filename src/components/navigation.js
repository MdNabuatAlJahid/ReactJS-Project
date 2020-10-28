import React, { Component } from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { SemanticUI } from 'react-atomic-molecule'
import { SmoothScrollLink } from 'organism-react-scroll-nav'

const NavigationDiv = styled.div`
  position: relative;
  margin: auto 0 auto 20px;
  position: fixed;
  top: 25vh;
  z-index: 2;
  width: 10px;
`
const MainDiv = styled.div`
  height: 70px;
`
const TextColorMagenta = styled.p`
  top: -20px;
  left: 100%;
  margin: 0;
  padding: 0;
  transform: rotate(-90deg) translate3d(0, -50%, 0);
  transform-origin: 0 0;
  position: absolute;
  color: #e6007e;
  font-size: 15px;
  letter-spacing: 0.15625rem;
  font-weight: 700;
`
const SmallGraySquire = styled.div`
  height: 40px;
  width: 10px;
  margin: 4px 0 0 0;
  background-color: #e6007e;
`

const Border = styled.div`
  height: 50px;
  width: 20px;
  background-color: transparent;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  &:hover {
    border: 1px solid #e6007e;
  }
`

const Styles = {
  active: {
    color: 'green',
  },
}

class MenuItem extends Component {
  render() {
    const { targetInfo, style, ...reset } = this.props
    let activeStyle = null
    if (targetInfo.active) {
      activeStyle = Styles.active
    }
    return (
      <div
        style={{
          ...Styles.link,
          ...style,
          ...activeStyle,
        }}
        {...reset}
      />
    )
  }
}

const SmallGraySquireWithText = props => {
  return (
    <MainDiv>
      <Border>
        <SmallGraySquire />
      </Border>

      <TextColorMagenta>{props.text}</TextColorMagenta>
    </MainDiv>
  )
}

const Navigation = props => {
  return (
    <SemanticUI>
      <MediaQuery query="(min-device-width: 800px)">
        <NavigationDiv>
          <SmoothScrollLink
            scrollRefId="nav-parent"
            container={<MenuItem />}
            targetId="home"
          >
            <a href="#home">
              <SmallGraySquireWithText text="Home" />
            </a>
          </SmoothScrollLink>
          <SmoothScrollLink
            scrollRefId="nav-parent"
            container={<MenuItem />}
            targetId="portfolio"
          >
            <a href="#portfolio">
              <SmallGraySquireWithText />
            </a>
          </SmoothScrollLink>
          <a href="#design">
            <SmallGraySquireWithText />
          </a>
          <a href="#kontakt">
            <SmallGraySquireWithText />
          </a>
          <a href="#projectStart">
            <SmallGraySquireWithText />
          </a>
          <a href="#project">
            <SmallGraySquireWithText />
          </a>
        </NavigationDiv>
      </MediaQuery>
    </SemanticUI>
  )
}
export default Navigation
