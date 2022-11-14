import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import LeftSide from './leftSide'
import RightSide from './rigthSide'

const PokedexDiv = styled.div`
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 500px;
    background: red;
    display:flex;
`



const Pokedex = () => {
  return (
    <PokedexDiv>
    <LeftSide/>
    <RightSide/>

    </PokedexDiv>
  )
}

export default Pokedex