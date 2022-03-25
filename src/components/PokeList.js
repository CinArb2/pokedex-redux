import React from 'react'
import { Container } from './Container'
import {Card, CardImg, CardTitle, CardText, CardInfo, CardDetail} from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchListPokemon } from '../redux/actionCreators'


const PokeList = () => {
  const dispatch = useDispatch()
  const listPokemons = useSelector(state => state.listPokemons)
  
  useEffect(() => {
    dispatch(fetchListPokemon())
  }, [])

  

  return (
    <Container maxWidth="1000px" flex>
      {
        listPokemons?.map(el => (
          <Card key={el.data.id}>
            <CardImg src={el.data.sprites.other.dream_world.front_default} alt="pokemon" />
            <CardTitle>{el.data.name }</CardTitle>
            <CardText>Planta / Veneno</CardText>
            <CardText><span> Tipo </span></CardText>
            <CardInfo>
              <CardDetail>
                <CardText> <span> HP </span></CardText>
                <CardText>59</CardText>
              </CardDetail>
              <CardDetail>
                <CardText><span> HP </span></CardText>
                <CardText>20</CardText>
              </CardDetail>
              <CardDetail>
                <CardText><span> HP </span></CardText>
                <CardText>49</CardText>
              </CardDetail>
              <CardDetail>
                <CardText><span> HP </span></CardText>
                <CardText>45</CardText>
              </CardDetail>
            </CardInfo>
          </Card>
        ))
      }
      
    </Container>
  )
}

export default PokeList