import React from 'react'
import { Container } from './Container'
import {Card, CardImg, CardTitle, CardText, CardInfo, CardDetail} from './Card'
import {  useSelector } from 'react-redux'
import { LinkPoke } from './LinkPoke'
import Pagination from './Pagination'


const PokeList = () => {
  const { listPokemons } = useSelector(state => state)


  return (
    <>
      <Container maxWidth="1400px" flex>
      {
        listPokemons?.map(el => (
        <LinkPoke to={`/pokedex/${el.data.id}`} key={el.data.id}>
          <Card >
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
        </LinkPoke>
        ))
      }
      
      </Container>
      <Pagination />
    </>
  )
}

export default PokeList