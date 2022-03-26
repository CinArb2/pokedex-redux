import React, { useEffect } from 'react'
import HeaderPokedex from '../components/HeaderPokedex'
import { Form } from '../components/Form'
import { Input} from '../components/Input'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Container } from '../components/Container'
import PokeList from '../components/PokeList'
import { fetchListTypes, fetchListTypeSelected } from '../redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'

const Pokedex = () => {
  const dispatch = useDispatch()
  const {listType, name} = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchListTypes())
  }, [])

  const handleSelect = (e) => {
    dispatch(fetchListTypeSelected(e.value))
    
  }

  const options = []

  listType.map(el => {
    return options.push({value: el.url, label: el.name})
  })


  return (
    <>
      <HeaderPokedex />
      <Container maxWidth="1350px" >
        <Text> <span>Bienvenido {name},</span> aqui podras encontrar tu pokemon favorito</Text>
        <Form>
          <Input placeholder="Buscar pokemon..."/>
          <Button>Buscar</Button>
          <Select options={options} onChange={handleSelect}/>
        </Form>
      </Container>
      <PokeList/>
    </>
  )
}

export default Pokedex;