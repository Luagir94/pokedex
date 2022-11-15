import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 100%;
    width: 50%;   
    }

`
const Loader = () => {
    return (
        <StyledLoader>
            <img src="/assets/pokeball.gif" alt="" />
        </StyledLoader>
    )
}

export default Loader