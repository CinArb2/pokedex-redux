
import { SET_NAME, SET_POKEMON_LIST, SELECTED_POKEMON, SET_LIST_TYPES, SELECTED_TYPE } from './actionTypes'

export const reducerListPokemon = (state = [], action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return action.payload
    default:
      return state
  }
}

export const reducerName = (state = "", action) => {
  switch (action.type) {
    case SET_NAME:
      return action.payload
    default:
      return state
  }
}

export const reducerSelectedProduct = (state = [], action) => {
  switch (action.type) {
    case SELECTED_POKEMON:
      return action.payload
    default:
      return state
  }
}

export const reducerListTypes = (state = [], action) => {
  switch (action.type) {
    case SET_LIST_TYPES:
      return action.payload
    default:
      return state
  }
}

export const reducerSelectedType = (state = [], action) => {
  switch (action.type) {
    case SELECTED_TYPE:
      return action.payload
    default:
      return state
  }
}
