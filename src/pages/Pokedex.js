import React, { useEffect } from 'react'
import HeaderPokedex from '../components/HeaderPokedex'
import { Form } from '../components/Form'
import { Input} from '../components/Input'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Container } from '../components/Container'
import PokeList from '../components/PokeList'
import { fetchListTypes } from '../redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

const Pokedex = () => {
  const dispatch = useDispatch()
  const listType = useSelector(state => state.listType)

  useEffect(() => {
    dispatch(fetchListTypes())
  }, [])

  const handleSelect = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <HeaderPokedex />
      <Container maxWidth="1000px" >
        <Text> <span>Bienvenido Nombre,</span> aqui podras encontrar tu pokemon favorito</Text>
        <Form>
          <Input />
          <Button>Buscar</Button>
          <Input list="types" onBlur={handleSelect}/>
          <datalist id="types">
            {
              listType.map((type, index) => (
                <option key={index} value={ type.name}/>
              ))
            }
          </datalist>
        </Form>
      </Container>
      <PokeList/>
    </>
  )
}

export default Pokedex;