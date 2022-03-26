import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const PaginationStyle = styled(ReactPaginate)`
  
  &.pagination{
    display: flex;
    gap: 2rem;
    justify-content: center;
    font-size: 1.7rem;
    flex-wrap: wrap;
    
    & .page-li{
      cursor: pointer;
      border: 1px solid gray;
      padding: 0;

      &.active{
        color: red;
      }

      & .page-link{
      padding: 1rem;
    }

    }
    
  }

`
