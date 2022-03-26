import { SET_NAME, SET_POKEMON_LIST, SET_LIST_TYPES, SET_TOTAL_POKE, SET_ITEMS_TYPE } from './actionTypes'
import axios from 'axios'

export const fetchListPokemon = (url) => {
  return async (dispatch) => {
    const response = await axios.get(url)
    dispatch(setTotalPoke(response.data.count))
    const arrayPromises = response.data.results.map(char => axios.get(char.url))
    Promise.all(arrayPromises).then(resp => dispatch(setPokemonList(resp)));
  }
}

export const fetchListTypeSelected = (url) => {
  return async (dispatch) => {
    const response = await axios.get(url)
    dispatch(setTotalPoke(response.data.pokemon.length))
    dispatch(setItemsType(response.data.pokemon))
    const arrayPromises = response.data.pokemon.map(char => axios.get(char.pokemon.url))
    const newArrayPromises = arrayPromises.slice(0, 20)
    Promise.all(newArrayPromises).then(resp => dispatch(setPokemonList(resp)));
  }
}


export const fetchListTypes = () => {
  return async (dispatch) => {
    const response = await axios.get('https://pokeapi.co/api/v2/type/')
    
    dispatch(setListType(response.data.results))
  }
}

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  }
}

export const setPokemonList = (data) => {
  return {
    type: SET_POKEMON_LIST,
    payload: data,
  }
}


export const setListType = (data) => {
  return {
    type: SET_LIST_TYPES,
    payload: data,
  }
}

export const setTotalPoke = (data) => {
  return {
    type: SET_TOTAL_POKE,
    payload: data,
  }
}

export const setItemsType = (data) => {
  return {
    type: SET_ITEMS_TYPE,
    payload: data,
  }
}