import React from 'react'
import styled from 'styled-components'
import { usePokedex } from '../../../../context'


const MovButtonsContainer = styled.div`
    grid-area :movButtons;
    height: 50%;
    width: 80%;
    display: grid; 
  grid-template-columns: 1fr 0.5fr 1fr; 
  grid-template-rows: 1fr 0.5fr 1fr; 
  align-self:center;
  gap: 0px 0px; 
  grid-template-areas: 
    ". buttonUp ."
    "buttonLeft center   buttonRight"
    ". buttonDown .";
    &>button{
        background: black;
        cursor: pointer;

    
    } 
`
const ButtonUp = styled.button`
    grid-area: buttonUp;
    box-shadow: 0 3px #999;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
    
`
const ButtonDown = styled.button`
    grid-area: buttonDown;
    position: relative;
    box-shadow: 0 3px #999 ;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    &:active {

box-shadow: 0 2px #666;
transform: unset;
}
`
const ButtonLeft = styled.button`
    grid-area: buttonLeft;
    box-shadow: 0 3px #999;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
`
const ButtonRight = styled.button`
    grid-area: buttonRight;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 3px #999;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
`
const DivCenter = styled.div`
    grid-area: center;
    background: black;
    position:relative;
    z-index: 2;

`
const MovButtons = () => {
    const {selected,list, setSelected, pagination, setUrl, setPrevUrl, url} =usePokedex()

    const changePoke = (page : 'next' | 'prev') : void=> {
        if (selected?.id) {
            if (page === 'prev' && typeof page === 'string') {
                const i : number =list.findIndex( x=> x.id === selected.id)
                if (i === 0 && pagination.previous) {
                    setPrevUrl?.(url)
                    setUrl?.(pagination.previous)
                }else{
                    setSelected?.(list[i-1])
                }
                
            }else if (page === 'next'  && typeof page === 'string'){
                const i : number =list.findIndex( x=> x.id === selected.id)
                if (i === 19 && pagination.next) {
                    setPrevUrl?.(url)
                    setUrl?.(pagination.next)
                }else{
                    setSelected?.(list[i+1])
                }
            }   
        }

    }
    return (
        <MovButtonsContainer>
            <DivCenter />
            <ButtonUp></ButtonUp>
            <ButtonDown></ButtonDown>
            <ButtonLeft onClick={() => changePoke('prev')}></ButtonLeft>
            <ButtonRight onClick={() => changePoke('next')}></ButtonRight>
        </MovButtonsContainer>
    )
}

export default MovButtons