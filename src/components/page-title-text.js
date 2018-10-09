import React from 'react'
import styled from 'styled-components'

//styling page title text
const PageTitleText = styled.p`
  color: #e6007e;
  font-size: 60px;
  font-weight: bold;
`

const PageTitle = props => {
  return <PageTitleText>{props.children}</PageTitleText>
}

export default PageTitle
