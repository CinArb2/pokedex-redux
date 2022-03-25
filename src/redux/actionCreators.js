import { SET_NAME, SET_POKEMON_LIST, SELECTED_POKEMON, SET_LIST_TYPES, SELECTED_TYPE } from './actionTypes'
import axios from 'axios'

export const fetchListPokemon = () => {
  return async (dispatch) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    const arrayPromises = response.data.results.map(char => axios.get(char.url))
    Promise.all(arrayPromises).then(resp => dispatch(setPokemonList(resp)));
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

export const SelectedPokemon = (id) => {
  return {
    type: SELECTED_POKEMON,
    payload: id,
  }
}

export const setListType = (data) => {
  return {
    type: SET_LIST_TYPES,
    payload: data,
  }
}

export const selectedType = (data) => {
  return {
    type: SELECTED_TYPE,
    payload: data,
  }
}