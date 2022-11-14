import React from 'react'
import styled from 'styled-components'
import { usePokedex } from '../../../../context'

const DisplayContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    grid-area: display;
 
`

const DisplayBorder = styled.div`
    width: 90%;
    height: 90%;
    background: gray;
    border-radius: 2px;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
  &:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 30px solid red;
  border-left: 30px solid transparent;
  width: 0;
  transform: rotate(90deg)
}
`
const DisplayData = styled.div`
    width: 75%;
    height: 75%;
    background: black;
    border-radius: 5px;
    overflow-y: auto;
    overflow-x: hidden;
    img{
        width :150px;
        height:150px;
        margin-left: auto;
        margin-right:auto;
        display:block;
        margin-top: 1rem
    }
`
const TopHoles = styled.div`
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 10%;
    top: 1%;
    gap: .5rem;

    &>div{
        border-radius: 50%;
        background: red;
        width: 30%;
        height: 70%;
    }
`

const BottomBars = styled.div`
     position:absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 8%;
    height: 8%;
    bottom: 2%;
    right: 1rem;

    flex-direction: column;
    background: red;
    &>div{

        background: grey;
        width: 100%;
        height: 1px;
    }
`


const Display = () => {
    const {selected,list, setSelected} =usePokedex()

  return (
    <DisplayContainer>
        <DisplayBorder>
        <TopHoles>
            <div></div>
            <div></div>
        </TopHoles>
        <BottomBars>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </BottomBars>
        <DisplayData>
        {selected && <>
            <img src={selected.sprites.other.dream_world.front_default} alt="" />
        
        
        </>}
        </DisplayData>
        </DisplayBorder>
    </DisplayContainer>
  )
}

export default Display