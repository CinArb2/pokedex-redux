import { combineReducers } from 'redux'
import { reducerListPokemon, reducerName, reducerSelectedProduct, reducerListTypes, reducerSelectedType } from './reducers'

const rootReducer = combineReducers({
  name: reducerName,
  listPokemons: reducerListPokemon,
  selectedPokemon: reducerSelectedProduct,
  listType: reducerListTypes,
  selectedType: reducerSelectedType,
})

export default rootReducer;
