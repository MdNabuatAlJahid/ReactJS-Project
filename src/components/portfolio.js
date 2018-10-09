import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PageTitle from '../components/page-title-text'
import Container from '../components/container'
import InterfaceDesign from './portfolio-items-description'
import {
  ScrollSpy,
  ScrollReceiver,
  SmoothScrollLink,
  scrollDispatch,
} from 'organism-react-scroll-nav'

//--styling page title description
const PageTitleDescription = styled.p`
  text-align: center;
  margin: 40px;
  font-size: 25px;
`

//--styling first div
const FirstDivElement = styled.div`
  padding: 0 4%;
`

const ListItemsDiv = styled.div`
  width: 32%;
  height: 300px;
  min-width: 250px;
  float: left;
  margin: 0 10px 10px 0;
  background-color: black;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: #e6007e;
  }
`

const Circle = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
  margin: 0 auto;
  padding: 35px;
`

const HeadingText = styled.h3`
  color: white;
  text-align: center;
  margin-top: 50px;
`

const ListItems = props => {
  return (
    <ListItemsDiv>
      <HeadingText>{props.headingText}</HeadingText>

      <Circle>{props.children}</Circle>
    </ListItemsDiv>
  )
}

function onClickChange() {
  let MyDiv = document.getElementById('myDIV')
  if (MyDiv.style.display === 'none') {
    MyDiv.style.display = ''
  } else {
    MyDiv.style.display = 'none'
  }
}

const Portfolio = props => (
  <Container>
    <FirstDivElement>
      <PageTitleDescription>Was können wir für Sie tun?</PageTitleDescription>
      <ScrollSpy id="portfolio">
        <PageTitle>PORTFOLIO</PageTitle>

        <div onClick={onClickChange}>
          <ListItems headingText="Interface Design">
            <Img
              style={{
                height: '50px',
                width: '50px',
              }}
              sizes={props.interfacedesign}
            />
          </ListItems>
        </div>

        <div id="myDIV" style={{ display: 'none' }}>
          <InterfaceDesign
            secondBackgroundImage={props.secondBackgroundImage}
            interfacedesign={props.interfacedesign}
          />
        </div>

        <ListItems headingText="Visual Design">
          <Img
            style={{
              height: '50px',
              width: '50px',
            }}
            sizes={props.visualdesign}
          />
        </ListItems>

        <ListItems headingText="Information Design">
          <Img
            style={{
              height: '50px',
              width: '50px',
            }}
            sizes={props.informationdesign}
          />
        </ListItems>

        <ListItems headingText="Motion Design">
          <Img
            style={{
              height: '50px',
              width: '50px',
            }}
            sizes={props.motiondesign}
          />
        </ListItems>

        <ListItems headingText="Corporate Design">
          <Img
            style={{
              height: '50px',
              width: '50px',
            }}
            sizes={props.corporatedesign}
          />
        </ListItems>

        <a href="#">
          <ListItems headingText="Interface Design 6" />
        </a>
      </ScrollSpy>
    </FirstDivElement>
  </Container>
)
export default Portfolio
