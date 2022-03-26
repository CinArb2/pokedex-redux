import React, { useState, useEffect} from 'react'
import { PaginationStyle } from './PaginationStyle'
import {useDispatch, useSelector} from 'react-redux'
import { fetchListPokemon } from '../redux/actionCreators'

const Pagination = () => {
  const dispatch = useDispatch()
  const { totalPoke } = useSelector(state => state)
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const { itemTypesList} = useSelector(state => state.itemTypesList)

  useEffect(() => {
    dispatch(fetchListPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=${itemOffset}&limit=20`))
  }, [itemOffset])
 
  const handlePageClick = (event) => {
    if (itemTypesList !== "") {
      
    } else {
      setItemOffset(event.selected * 20);
    }
  };
  
  return (
      <PaginationStyle
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={Math.ceil(totalPoke / 20)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        className="pagination"
        activeClassName="active"
       pageLinkClassName="page-link"
       pageClassName="page-li"
      />
  )
}

export default Pagination