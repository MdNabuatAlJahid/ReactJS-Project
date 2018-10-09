import React from 'react'
import Home from '../components/home-page'
import Portfolio from '../components/portfolio'
import UserCenteredDesign from '../components/user-centered-design'
import UnsereBesten from '../components/unsere-besten'
import Kontakt from '../components/kontakt-page'
import Container from '../components/container'
import ProjektStarten from '../components/projekt-starten'
import Navigation from '../components/navigation'

const IndexPage = ({ data }) => (
  <Container>
    <Navigation />
    <Home
      firstBackgroundImage={data.file.childImageSharp.sizes}
      logo={data.logo.childImageSharp.sizes}
    />

    <Portfolio
      firstBackgroundImage={data.file.childImageSharp.sizes}
      secondBackgroundImage={data.image1.childImageSharp.sizes}
      interfacedesign={data.interfacedesign.childImageSharp.sizes}
      visualdesign={data.visualdesign.childImageSharp.sizes}
      informationdesign={data.informationdesign.childImageSharp.sizes}
      motiondesign={data.motiondesign.childImageSharp.sizes}
      corporatedesign={data.corporatedesign.childImageSharp.sizes}
    />

    <UserCenteredDesign
      thirdBackgroundImage={data.image2.childImageSharp.sizes}
    />

    <UnsereBesten />

    <Kontakt />

    <ProjektStarten secondBackgroundImage={data.image1.childImageSharp.sizes} />
  </Container>
)

export const query = graphql`
  query imageQuary {
    logo: file(relativePath: { eq: "logo-white.png" }) {
      childImageSharp {
        sizes(maxWidth: 247, maxHeight: 100) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1366, maxHeight: 768) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    image1: file(relativePath: { eq: "secondBackground.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1366, maxHeight: 768) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    image2: file(relativePath: { eq: "thirdBackground.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1366, maxHeight: 768) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    interfacedesign: file(relativePath: { eq: "interfacedesign.png" }) {
      childImageSharp {
        sizes(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    visualdesign: file(relativePath: { eq: "visualdesign.png" }) {
      childImageSharp {
        sizes(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    informationdesign: file(
      relativePath: { eq: "informationdesign_icon.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    motiondesign: file(relativePath: { eq: "motiondesign_icon.png" }) {
      childImageSharp {
        sizes(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    corporatedesign: file(relativePath: { eq: "corporatedesign_icon.png" }) {
      childImageSharp {
        sizes(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
export default IndexPage
