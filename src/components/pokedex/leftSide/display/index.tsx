import React from 'react'
import styled from 'styled-components'
import { usePokedex } from '../../../../context'
import { Pokemon } from '../../../../types'
import Loader from '../../../loader'


const returnType: any[] = [
    {
        type: 'fire',
        css: `{
        border: 1px solid black;
        background-color: rgb(223, 89, 0);
        width: 5rem;
    border-radius: 5px;
    }`},
    {
        type: 'grass',
        css: `{
    border: 1px solid black;
    background-color: rgb(39, 223, 39);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: 'ice',
        css: `{
        border: 1px solid black;
        background-color: #96d8d6;
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: 'water',
        css: ` {
    border: 1px solid black;
    background-color: rgb(0, 174, 255);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: 'bug',
        css: `{
    border: 1px solid black;
    background-color: #a7b723;
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "poison",
        css: `{
    border: 1px solid black;
    background-color: #ad39a6;
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "electric",
        css: `{
    border: 1px solid black;
    background-color: rgb(255, 230, 0);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: 'ground',
        css: ` {
    border: 1px solid black;
    background-color: #715746;
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "rock",
        css: ` {
    border: 1px solid black;
    background-color: rgb(102, 63, 32);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "fairy",
        css: `{
    border: 1px solid black;
    background-color: rgb(246, 143, 250);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "normal",
        css: `{
    border: 1px solid black;
    background-color: #a5aa74;
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "flying",
        css: `{
    border: 1px solid black;
    background-color: rgb(198, 168, 247);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "psychic",
        css: `{
    border: 1px solid black;
    background-color: rgb(250, 62, 250);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "dragon",
        css: ` {
    border: 1px solid black;
    background-color: #7737fd;
    width: 5rem;
    border-radius: 5px;

}`},

    {
        type: "fighting",
        css: `{
    border: 1px solid black;
    background-color: #bc3225;
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "ghost",
        css: `{
    border: 1px solid black;
    background-color: rgb(110, 103, 138);
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "steel",
        css: ` {
    border: 1px solid black;
    background-color: gray;
    width: 5rem;
    border-radius: 5px;

}`},
    {
        type: "dark",
        css: ` {
    border: 1px solid black;
    background-color: #715746;
    width: 5rem;
    border-radius: 5px;

}`}
]

const DisplayContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 300px;
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
const StyledParagraph = styled.p`
    font-size: .6rem;
    color: white;
    text-transform: uppercase;
    padding-left: 5%;
    padding-bottom: 1rem;
    margin-top: 1rem;
`
interface StyledTagI {
    type: string
}
const StyledTag = styled.span<StyledTagI>` ${(props): string => returnType.find(x => x.type === props.type).css};
padding: 3px 5px;
`
const Display = () => {
    const { selected, list, setSelected } = usePokedex()

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
                    {selected ? <>
                        <img src={selected?.sprites?.other?.dream_world.front_default} alt="" style={{ marginBottom: '3rem' }} />
                        <StyledParagraph>Weight : {selected.weight} kg</StyledParagraph>
                        {selected.types.map((x: any) => <StyledParagraph>Type {x?.slot} : <StyledTag type={x?.type.name}>{x?.type.name}</StyledTag> </StyledParagraph>)}
                        {selected.stats.map((x: any) => <StyledParagraph>{x?.stat?.name} :{x?.base_stat}</StyledParagraph>)}

                    </>
                        :
                        <Loader />


                    }
                </DisplayData>
            </DisplayBorder>
        </DisplayContainer>
    )
}

export default Display