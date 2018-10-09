import React from 'react'
import styled from 'styled-components'
import PageTitle from '../components/page-title-text'
import Container from '../components/container'
//import Img from "gatsby-image";

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

const UnsereBesten = () => {
  return (
    <Container>
      <FirstDivElement>
        <PageTitleDescription>
          Wer erarbeitet die für Sie perfekte Lösung?
        </PageTitleDescription>

        <PageTitle>UNSERE BESTEN</PageTitle>
        <p>VORNAME</p>
        <p>NAME</p>
        <p>UX DESIGNER</p>
        <p>Unsere Besten</p>
      </FirstDivElement>
    </Container>
  )
}
export default UnsereBesten
