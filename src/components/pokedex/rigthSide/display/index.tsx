import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Pokemon } from '../../../../types'
import { usePokedex } from '../../../../context'
import Loader from '../../../loader'


const DisplayContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    grid-area: display;
 
`

const DisplayData = styled.div`
    width: 90%;
    height: 80%;
    background: black;
    border-radius: 5px;
    position:relative;
    overflow: auto;
    padding: 10px;
`

interface pokeCard {
  active?: boolean
}
const PokeCard = styled.div<pokeCard>`
  width: 100%;
  height: fit-content;
  border: 2px solid white;
  margin-bottom: 5px ;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 5px;
  filter: ${props => props.active ? 'grayscale(0)' : ' grayscale(1)'};
  border-color:  ${props => props.active ? 'green' : 'white'};
  img{
    width: 40px;
    height: 40px;
  }
  &:hover{
    filter: grayscale(0);
    border-color: green;
  }
  &>div{
    &:nth-child(2){
      color: white;
      width: 50%;
      text-align: left;
      margin-top: auto;
      margin-bottom:auto;
      text-transform: capitalize
    }
  }
`
const Display = () => {
  const { list, setSelected, selected, prevUrl, url, loading } = usePokedex()
  const ref = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<any[]>([])

  useEffect(() => {
    const actualize = () => {
      const params = url.split('?')[1].split('&')[0].split('=')[1]
      const prev = prevUrl?.split('?')[1].split('&')[0].split('=')[1] || '0'
      console.log(prevUrl, url);
      ref.current?.scrollIntoView()
      if (parseInt(prev) <= parseInt(params)) {
        ref.current?.scrollTo({ top: 0 })
      } else {
        ref.current?.scrollTo({ top: 1200 })







      }

    }
    list.length && actualize()
  }, [list])


  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, list.length);
  }, [list])

  useEffect(() => {
    list.length && ref.current?.scrollTo({ top: itemsRef.current[itemsRef.current.findIndex(x => x.id === `${selected?.id}`)].offsetTop - 20 })
  }, [selected])
  return (
    <DisplayContainer>
      <DisplayData ref={ref}>
        {!loading ? list.map((poke: Pokemon, i: number): JSX.Element => <PokeCard
          key={poke.name}
          onClick={() => setSelected?.(poke)}
          id={`${poke.id}`}
          active={poke.id === selected?.id ? true : false}
          ref={el => itemsRef.current[i] = el}
        >
          <div>
            <img src={poke.sprites.other.dream_world.front_default} alt="" />
          </div>
          <div>
            <p>{poke.name}</p>
          </div>
        </PokeCard>) : <Loader />}
      </DisplayData>
    </DisplayContainer>
  )
}

export default Display