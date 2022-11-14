import './App.css'
import styled from 'styled-components'
import Pokedex from './components/pokedex'

import { PokedexProvider } from './context'
export const StyledLayout = styled.div`
  height: 100vh;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function App() {

  return (
    <PokedexProvider>
      <StyledLayout>
        <Pokedex />
      </StyledLayout>
    </PokedexProvider>
  )
}
