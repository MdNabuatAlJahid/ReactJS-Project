import React from 'react'
import styled from 'styled-components'
import Container from './container'
import BackgroundImage from './background-image'

//--styling first div
const FirstDivElement = styled.div`
  padding: 0 4%;
`
const ProjektStartenDiv = styled.div`
  text-align: center;
  font-size: 30px;
  background-color: #000;
  color: #fff;
  height: 80px;
  width: 350px;
  margin: 50px auto 60px;
  padding: 20px 0 0 0;
  cursor: pointer;
  &:hover {
    color: #e6007e;
  }
`
//--styling page title description
const PageTitleDescription = styled.p`
  text-align: center;
  margin: 40px;
  font-size: 25px;
  color: white;
`

const Circle = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
  margin: 0 auto;
  padding: 35px;
  &:hover {
    background-color: #e6007e;
  }
`

const HeadingText = styled.h3`
  color: white;
  text-align: center;
  margin-top: 50px;
  &:hover {
    color: #e6007e;
  }
`
const JustifyContentCenter = styled.div`
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
`

const ListItemDiv = styled.div`
  min-width: 200px;
  width: 25%;
  cursor: pointer;
  justify &:hover {
    color: #e6007e;
  }
`
const ListItem = props => {
  return (
    <ListItemDiv>
      <Circle>{props.children}</Circle>

      <HeadingText>{props.headingText}</HeadingText>
    </ListItemDiv>
  )
}

function onClickChange() {
  let startProjectDIV = document.getElementById('startProjectDIV')
  if (startProjectDIV.style.display === 'none') {
    startProjectDIV.style.display = ''
  } else {
    startProjectDIV.style.display = 'none'
  }
}

function onEventChange() {
  let projectDIV = document.getElementById('projectDIV')
  if (projectDIV.style.display === 'none') {
    projectDIV.style.display = ''
  } else {
    projectDIV.style.display = 'none'
  }
}

const ProjektStarten = props => (
  <div>
    <div>
      <Container>
        <FirstDivElement>
          <ProjektStartenDiv onClick={onClickChange}>
            Projekt starten
          </ProjektStartenDiv>
        </FirstDivElement>
      </Container>
    </div>

    <div id="startProjectDIV" style={{ display: 'none' }}>
      <BackgroundImage BackgroundImage={props.secondBackgroundImage}>
        <PageTitleDescription>
          Womit können wir Ihren helfen?
        </PageTitleDescription>
        <JustifyContentCenter>
          <div onClick={onEventChange}>
            <ListItem headingText="WEBSITE / APP" />
          </div>

          <ListItem headingText="BRAND REDESIGN" />

          <ListItem headingText="LOREM IPSUM" />

          <ListItem headingText="LOREM IPSUM" />
        </JustifyContentCenter>
      </BackgroundImage>
    </div>

    <div id="projectDIV" style={{ display: 'none' }}>
      <BackgroundImage BackgroundImage={props.secondBackgroundImage}>
        <PageTitleDescription>Was brauchen Sie?</PageTitleDescription>
        <JustifyContentCenter>
          <ListItem headingText="DESIGN" />

          <ListItem headingText="CODE" />

          <ListItem headingText="BOTH" />
        </JustifyContentCenter>
      </BackgroundImage>
    </div>
  </div>
)
export default ProjektStarten
