import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import HeaderPokedex from '../components/HeaderPokedex'
import { Container } from '../components/Container'
import { fetchQuery, cleanQueryForm } from '../redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import {CardOpened, CardImg, CardTitle, CardText, CardInfo, CardDetail, CardBox, CardStats, CardSubTitle} from '../components/Card'

const CharacterView = () => {
  const param = useParams()
  const dispatch = useDispatch()
  const querySearch = useSelector(state => state.querySearch)
  
  useEffect(() => {
    dispatch(fetchQuery(param.id))
    return () => {
      dispatch(cleanQueryForm())  //whenever the component removes it will executes
    }
  }, [dispatch, param])

  
  return (
    <main>
      <HeaderPokedex />
      <Container maxWidth="1000px">
        <CardOpened >
          <CardImg src={querySearch.data?.sprites.other.dream_world.front_default} alt="pokemon" />
          <CardTitle>#{querySearch.data?.id}</CardTitle>
          <CardTitle>{querySearch.data?.name}</CardTitle>
          <CardInfo maxWidth="200px">
            <CardDetail>
              <CardText>Peso</CardText>
              <CardText>59</CardText>
            </CardDetail>
            <CardDetail>
              <CardText>Altura</CardText>
              <CardText>20</CardText>
            </CardDetail>
          </CardInfo>
          <CardInfo>
            <CardDetail>
              <CardTitle>Type</CardTitle>
              <CardBox color="green">Planta</CardBox>
              <CardBox color="purple">Venenoso</CardBox>
            </CardDetail>
            <CardDetail>
              <CardTitle>Abilities</CardTitle>
              <CardBox >Planta</CardBox>
              <CardBox >Venenoso</CardBox>
            </CardDetail>
          </CardInfo>
          <CardTitle>Stats</CardTitle>
          <CardDetail width="90%" margin="auto">
            <CardSubTitle className="text-left">20</CardSubTitle>
            <CardStats />
            <CardSubTitle className="text-left">20</CardSubTitle>
            <CardStats />
            <CardSubTitle className="text-left">20</CardSubTitle>
            <CardStats />
            <CardSubTitle className="text-left">20</CardSubTitle>
            <CardStats/>        
          </CardDetail>
        </CardOpened>
        <CardOpened>
          <CardTitle>Movements</CardTitle>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
          <CardBox >Planta</CardBox>
        </CardOpened>
      </Container>
    </main>
  )
}

export default CharacterView