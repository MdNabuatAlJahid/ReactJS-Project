import React from 'react'
import styled from 'styled-components'
import PageTitle from './page-title-text'
import Container from './container'
//import Img from "gatsby-image";

//--styling first div
const FirstDivElement = styled.div`
  padding: 0 4%;
`

//--styling page title description
const PageTitleDescription = styled.p`
  text-align: center;
  margin: 40px;
  font-size: 25px;
`

//--styling kontakt page title
const KontaktPageTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
`

//--styling kontakt main div
const MainDiv = styled.div`
  width: 100%;
`

//--styling  kontakt child div
const ChildDiv = styled.div`
  width: 33%;
  min-width: 280px;
  float: left;
  padding: 0 20px 0 0;
`

const SmallBlackCircles = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  text-align: center;
  background-color: #000;
  float: left;
  margin-right: 20px;
`

const Kontakt = () => (
  <Container>
    <FirstDivElement>
      <div id="kontakt">
        <PageTitleDescription>
          Lassen Sie uns gemeinsam begeistern!
        </PageTitleDescription>

        <PageTitle>KONTAKT</PageTitle>

        <MainDiv>
          <ChildDiv>
            <KontaktPageTitle>Schreiben sie uns</KontaktPageTitle>
            <p>
              Lorem ipsum Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam.
            </p>
            <p>mms-design@t-systems.com</p>
          </ChildDiv>

          <ChildDiv>
            <KontaktPageTitle>Besuchen Sie uns</KontaktPageTitle>
            <p>
              Stay up to date... lorem ipsum Lorem ipsum dolor sitamet,
              consetetur sadipscing elitr, sed diam.
            </p>
            <p>+49 711 999 - 6686</p>
          </ChildDiv>

          <ChildDiv>
            <KontaktPageTitle>Folgen Sie uns</KontaktPageTitle>
            <p>
              T-Systems Multimedia Solutions GmbH <br /> Fasanenweg 5, 70771
              Leinfelden-Echterdingen
            </p>

            <SmallBlackCircles />
            <SmallBlackCircles />
            <SmallBlackCircles />
          </ChildDiv>
        </MainDiv>
      </div>
    </FirstDivElement>
  </Container>
)
export default Kontakt
