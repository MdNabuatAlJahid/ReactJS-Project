import React from 'react'
import styled from 'styled-components'
import Container from '../components/container'
import BackgroundImage from '../components/background-image'

//styling page title text
const PageTitleText = styled.p`
  color: #e6007e;
  font-size: 60px;
  font-weight: bold;
  padding: 0 4%;
`

//--styling page title description
const PageTitleDescription = styled.p`
  text-align: center;
  margin: 40px;
  font-size: 25px;
  padding: 0 4%;
`

const UserCenteredDesign = props => (
  <div>
    <Container>
      <PageTitleDescription>
        Wie garantieren wir Zufriedenheit?
      </PageTitleDescription>
      <PageTitleText>MIT USER CENTERED DESIGN</PageTitleText>

      <BackgroundImage
        text={
          'Eine gute User Experience ist der Schlüssel zum Erfolg. Dabei stellen wir stets die Nutzer in den Mittel-punkt und orientieren uns an ihren Bedürfnissen, Auf-gaben und Zielen. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
        BackgroundImage={props.thirdBackgroundImage}
      />
    </Container>
  </div>
)
export default UserCenteredDesign
