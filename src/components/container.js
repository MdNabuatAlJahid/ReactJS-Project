import React from 'react'
import styled from 'styled-components'

//--styling Container
const ContainerDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`

const Container = props => {
  return <ContainerDiv>{props.children}</ContainerDiv>
}
export default Container
