import { combineReducers } from 'redux'
import { reducerListPokemon, reducerName, reducerListTypes, reducerTotalPoke, reducerSetItemsType } from './reducers'

const rootReducer = combineReducers({
  name: reducerName,
  listPokemons: reducerListPokemon,
  listType: reducerListTypes,
  totalPoke: reducerTotalPoke,
  itemTypesList: reducerSetItemsType,
})

export default rootReducer;
