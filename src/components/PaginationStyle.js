import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const PaginationStyle = styled(ReactPaginate)`
  
  &.pagination{
    display: flex;
    gap: 2rem;
    justify-content: center;
    font-size: 1.7rem;
    flex-wrap: wrap;

    & .previous a{
        padding: 1.3rem;
        cursor: pointer;
      }
    }

    & .next a{
        padding: 1.3rem;
        cursor: pointer;
      }
    }
    
    & .page-li{
      cursor: pointer;
      padding: 0;

      &.active{
        background-color: red;
        color: white;
      }

      & .page-link{
      padding: 1rem;
      }

    }
    
  }

`
