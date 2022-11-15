import React from 'react'
import styled from 'styled-components'
import Display from './display'
import MovButtons from './movButtons'
import Marquee from "react-fast-marquee";
const LeftSideDiv = styled.div`
    width: 50%;
    height: 100%;
    position: relative; 
    display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 0.25fr 0.5fr 3fr 1fr 1fr; 
  gap: 0px 0px; 
  overflow: hidden;
  grid-template-areas: 
    "topPoke topPoke topPoke"
    "topPoke2 topPoke2 topPoke2"
    "display display display"
    "blackButton . movButtons"
    "greenButton greenButton movButtons"; 
    @media max-width(700px){
        width: 100%;
    heigth: 50%;
    }`

const TopBorderOne = styled.div`
height: 100%;
width: 100%;
background : red;
grid-area: topPoke;
z-index: 2;

`

const TopBorderTwo = styled.div`
  width: 100%;
  height: 100%;
background: red;
position: relative;
grid-area: topPoke2;
z-index: 1;
box-shadow: 1px -10px 1px 0px #b90303 inset;
&:before {
content: '';
position: absolute;
bottom: 0;
right: 0;
border-top: 75px solid red;
border-right: 180px solid #b90303;
z-index: 3;

/* transform: rotateY(180deg) */
}
&:after {
content: '';
position: absolute;
bottom: 0;
right: 0;
border-top: 38px solid #b90303;
z-index: 3;
border-right: 70px solid red;


}
`
const Union = styled.div`
  position: absolute;
  height: 10px;
  width: 70%;
  background: #b90303;
  bottom: 0;
  left:0;
  z-index:4;
`

const Alert = styled.div`
  position: absolute;
  top: .2%;
  left: 1rem;
  width:40px;
  height: 40px;
  z-index:5;
  border: 3px solid rgba(255,255,255,0.75);
  border-radius: 50%;
  background: #0095ff;
  box-shadow: -5px -6px 5px 0px rgba(255,255,255,0.75) inset;
`

const BlackBtn = styled.button`
  grid-area: blackButton;
  width:36%;
    height: 40%;
    border-radius: 50%;
    align-self: center;
    justify-self: center;
    background: black;
    box-shadow: 0 3px #999;
    cursor: pointer;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
`
const GreenBtn = styled.button`
    grid-area: greenButton;
  width:50%;
    height: 40%;
    border-radius:4px;
    align-self: flex-start;
    justify-self: center;
    background: green;
    box-shadow: 0 3px #999;
    cursor: pointer;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
`
const StyledMarquee = styled(Marquee)`
  a{color: white !important;}
`
const LeftSide = () => {
  return (
    <LeftSideDiv>
      <Alert />
      <TopBorderOne />
      <TopBorderTwo>
        <Union />
      </TopBorderTwo>
      <Display />
      <MovButtons />
      <BlackBtn />
      <GreenBtn>
        <StyledMarquee gradient={false} speed={100}>
          <a href="https://lucianogiraudi.com/" target={'blank_'} rel='noopener noreferrer'>Made by Luciano Giraudi.</a>
          
        </StyledMarquee>
      </GreenBtn>
    </LeftSideDiv>
  )
}

export default LeftSide