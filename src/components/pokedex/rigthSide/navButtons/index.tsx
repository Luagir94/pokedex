import React from 'react'
import styled from 'styled-components'
const NavButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    grid-area: display;
    grid-area: navButtons;
flex-wrap: wrap ;
`

const NavigationButtonsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    padding-left: 8%;
    grid-area: display;
    grid-area: navButtons;
gap: .5rem;
`
const AcceptButtonContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    padding-right: 8%;
    grid-area: display;
    grid-area: navButtons;

gap: .5rem;
`

const Button = styled.button`
    width:36%;
    height: 60%;

    background: white;
    border-radius: 5px;
    box-shadow: 0 3px #999;
    cursor: pointer;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
   
`

const AcceptButton = styled.button`
   width:36%;
    height: 60%;
    border-radius: 50%;

    background: white;
    box-shadow: 0 3px #999;
    cursor: pointer;
    &:active {

box-shadow: 0 2px #666;
transform: translateY(4px);
}
`
const NavButtons = () => {
    return (
        <NavButtonsContainer>
            <NavigationButtonsContainer>
                <Button title='prev'></Button>
                <Button title='next'></Button>
            </NavigationButtonsContainer>
            <AcceptButtonContainer>
                <AcceptButton/>
            </AcceptButtonContainer>
        </NavButtonsContainer>
    )
}

export default NavButtons