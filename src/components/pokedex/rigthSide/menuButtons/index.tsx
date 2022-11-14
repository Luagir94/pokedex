import React from 'react'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    grid-area: display;
    grid-area: menuButtons;
flex-wrap: wrap ;
gap: .5rem;
`
const Button = styled.button`
    width: 15%;
    height: 40%;
    background: blue;

    border-radius: 5px;
    box-shadow: 0 3px #999;
    cursor: pointer;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}

   
`

const MenuButtons = () => {
  return (
    <ButtonsContainer>

        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
    </ButtonsContainer>
  )
}

export default MenuButtons