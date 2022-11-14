import React from 'react'
import styled from 'styled-components'
import Display  from './display'
import MenuButtons from './menuButtons'
import NavButtons from './navButtons'
import BottomButtons from './bottomButtons'
const RightSideDiv = styled.div`
    width: 50%;
    height: 100%;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 0.3fr 0.5fr 1fr 1fr 1.5fr 1fr 1fr; 
    gap: 0px 0px;
    overflow: hidden;
    grid-template-areas: 
    "topPoke topPoke topPoke"
    "topPoke2 topPoke2 topPoke2"
    "display display display"
    "display display display"
    "menuButtons menuButtons menuButtons"
    "navButtons navButtons navButtons"
    "bottomButtons bottomButtons bottomButtons"; 
    @media max-width(700px){
        width: 100%;
    heigth: 50%;
    }

`

const TopBorderOne = styled.div`
  height: 100%;
  width: 100%;
  background : white;
  grid-area: topPoke;
  z-index: 2;
`

const TopBorderTwo = styled.div`
    width: 100%;
    height: 100%;
  background: white;
  position: relative;
grid-area: topPoke2;

&:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 75px solid white;
  border-right: 120px solid red;
  width: 100%;
  heigth: 100%;
  transform: rotateY(180deg)
  }
`
const RightSide = () => {
  return (
    <RightSideDiv>
      <TopBorderOne />
      <TopBorderTwo/>
      <Display/>
      <MenuButtons/>
      <NavButtons/>
      <BottomButtons/>
    </RightSideDiv>
  )
}

export default RightSide