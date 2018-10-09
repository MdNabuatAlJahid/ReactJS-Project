import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Container from './container'

const FirstDivElement = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #000;
  padding: 0 4%;
`

const SecondDivElement = styled.div`
  position: relative;
  width: 100%;
  float: left;
  margin: 0 auto;
  padding: 20px 0 100px;
  z-index: 2;
`

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
`
const TextColorWhite = styled.p`
  color: white;
`
const SmallMagentaSquares = styled.div`
  height: 15px;
  width: 15px;
  background-color: #e6007e;
  float: left;
  margin: 6px 20px 0 0;
`

const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #fff;
  margin-top: 50px;
  padding: 20px;
`

const SmallMagentaSquareWithText = props => {
  return (
    <MainDiv>
      <SmallMagentaSquares />

      <TextColorWhite>{props.text}</TextColorWhite>
    </MainDiv>
  )
}

const InterfaceDesign = props => (
  <Container>
    <FirstDivElement>
      <Circle>
        <Img
          style={{
            height: '40px',
            width: '40px',
          }}
          sizes={props.interfacedesign}
        />
      </Circle>

      <SecondDivElement>
        <p style={{ color: '#e6007e', fontSize: '30px' }}>Interface Design</p>
        <TextColorWhite>
          Wir schaffen nutzerfreundliche und intuitiv bedienbare Erlrbniswelten.
          Im Mittelpunkt stehen dabei nicht nur Gebrauchstauglichkeit, sondern
          auch Faktoren wie Vertrauen, Emotionalität, Ästhetik und nicht zuletzt
          Spaß bei der Nutzung.
        </TextColorWhite>

        <SmallMagentaSquareWithText text="Geräte-übergreifend von der Smartwatch bis zum Desk-top-PC" />
        <SmallMagentaSquareWithText text="Anwendungsübergreifend: native Apps, responsive Weban-wendungen" />
        <SmallMagentaSquareWithText text="Vom klassischen Screen bis hin zu Virtual Reality Interfaces" />
      </SecondDivElement>

      <Img
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.6,
        }}
        sizes={props.secondBackgroundImage}
      />
    </FirstDivElement>
  </Container>
)
export default InterfaceDesign
