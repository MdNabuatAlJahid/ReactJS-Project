import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Container from '../components/container'
import {
  ScrollSpy,
  ScrollReceiver,
  SmoothScrollLink,
  scrollDispatch,
} from 'organism-react-scroll-nav'

//--styling first page title
const TitleFirstPage = styled.p`
  color: #e6007e;
  font-size: 55px;
  font-weight: bold;
`

//--styling first page success text
const SuccessText = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: white;
`

//--styling first background image
const FirstDivElement = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
  background-color: #000;
  padding: 0 4%;
`

//--styling first background image text
const SecondDivElement = styled.div`
  position: relative;
  width: 100%;
  float: left;
  margin: 0 auto;
  padding: 300px 0 100px;
  z-index: 2;
`
const TextColorWhite = styled.p`
  color: white;
`
//--styling arrow
const ArrowDown = styled.div`
width: 60px;
height:60px;
position: relative;
border-radius: 50%;
margin: 0 auto;
border: 2px solid #e6007e;
text-align: center;
-webkit-animation: 3s arrow infinite ease;
animation: 3s arrow infinite ease;
}
@keyframes arrow {
0%, 100% {
  top: 50px;
}
50% {
  top: 80px;
}
}
@-webkit-keyframes arrow {
0%, 100% {
  top: 50px;
}
50% {
  top: 80px;
}
}
&:after{
  content: "";
  width: 25px;
  height: 25px;
  position: absolute;
  margin: auto;
  left: 16px;
  top: 12px;
  border-right: 1px solid #e6007e;
  border-bottom: 1px solid #e6007e;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`

const Home = props => (
  <Container>
    <FirstDivElement>
      <ScrollSpy id="home">
        <Img
          style={{
            position: 'absolute',
            marginTop: '80px',
            height: '100px',
            width: '250px',
            zIndex: 2,
          }}
          sizes={props.logo}
        />

        <SecondDivElement>
          <TitleFirstPage> DESIGN EXCELLENCE</TitleFirstPage>
          <SuccessText>UNSER SCHLÜSSEL ZUM ERFOLG</SuccessText>
          <TextColorWhite>
            Unser Auftrag ist es Ihre Kunden zu begeistern. Dabei haben wir das
            Ziel, den Anwendern Ihrer Produkte durch nutzentriertes. Design eine
            begeisternde User Experience zu ermöglichen.
          </TextColorWhite>

          <ArrowDown />
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
          sizes={props.firstBackgroundImage}
        />
      </ScrollSpy>
    </FirstDivElement>
  </Container>
)
export default Home
