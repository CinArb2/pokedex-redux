import React, { useEffect , useState} from 'react'
import HeaderPokedex from '../components/HeaderPokedex'
import { Form } from '../components/Form'
import { Input} from '../components/Input'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Container } from '../components/Container'
import PokeList from '../components/PokeList'
import { fetchListTypes, fetchListTypeSelected, fetchListPokemon, fetchQuery } from '../redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Pokedex = () => {
  const dispatch = useDispatch()
  const { listType, name, itemTypesList, querySearch } = useSelector(state => state)
  const [input, setInput] = useState("")
  
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchListTypes())
    
    if (itemTypesList.length > 0) {
      dispatch(fetchListPokemon(itemTypesList.slice(0,20)))
    }
  }, [dispatch, itemTypesList, querySearch])

  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchQuery(input))
    
    setInput("")
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}/`)
      .then(() => navigate(`/pokedex/${input}`))
  }
  
  const handleSelect = (e) => {
    dispatch(fetchListTypeSelected(e.value))
  }

  const options = []

  listType.map(el => {
    return options.push({value: el.url, label: el.name})
  })
  
  return (
    <main>
      <HeaderPokedex />
      <Container maxWidth="1350px" >
        <Text> <span>Bienvenido {name},</span> aqui podras encontrar tu pokemon favorito</Text>
        <Form onSubmit={handleSubmit}>
          <Input onChange={(e) => setInput(e.target.value)} placeholder="look for a pokemon" value={input}/>
          <Button>Buscar</Button>
        </Form>
          {querySearch.error}
        <Select options={options} onChange={handleSelect} placeholder="filter by type"/>
      </Container>
      <PokeList/>
    </main>
  )
}

export default Pokedex;