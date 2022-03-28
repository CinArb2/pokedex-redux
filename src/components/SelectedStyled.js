import styled from "styled-components";
import Select from 'react-select'

export const SelectedStyled = styled(Select)`
  width: 50%;
  display: inline-block;
  font-size: 1.4rem;
  

  @media (max-width: 700px){
      width: 100%;
      margin:0  auto;
      margin-block: 1rem;
  }
`
