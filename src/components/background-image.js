import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Container from '../components/container'

//--styling first background image
const FirstDivElement = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #000;
  padding: 0 4%;
`

//--styling first background image text
const SecondDivElement = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  z-index: 2;
`
const TextColorWhite = styled.p`
  color: white;
`

const BackgroundImage = props => (
  <Container>
    <FirstDivElement>
      <SecondDivElement>
        {props.children}
        <TextColorWhite>{props.text}</TextColorWhite>
      </SecondDivElement>
      <Img
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.2,
        }}
        sizes={props.BackgroundImage}
      />
    </FirstDivElement>
  </Container>
)
export default BackgroundImage
