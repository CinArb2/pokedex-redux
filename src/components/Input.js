import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  max-width: 573px;
  height: 38px;
  margin-block: ${({ theme }) => theme.spacing.md};
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  font-size: 1.4rem;
  padding-inline: 0.5rem;

  @media (max-width: 700px){
      width: 100%;
      margin-inline: auto;
  }
`