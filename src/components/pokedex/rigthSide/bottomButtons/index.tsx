import React from 'react'
import styled from 'styled-components'
const NavButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    grid-area: display;
    grid-area: bottomButtons;
flex-wrap: wrap ;
`




const Button = styled.button`
    width:36%;
    height: 60%;
    background: #343434;
    border-radius: 5px;
    box-shadow: 0 3px #999;
    cursor: pointer;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
   
`


const BottomButtons = () => {
    return (
        <NavButtonsContainer>
            <Button></Button>
            <Button></Button>
        </NavButtonsContainer>
    )
}

export default BottomButtons