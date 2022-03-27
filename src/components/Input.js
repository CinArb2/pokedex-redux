import styled from "styled-components";

export const Input = styled.input`
  padding: 0.3rem;
  width: 80%;
  max-width: 410px;
  height: 38px;
  margin-top: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #d8d8d8;
  border-radius: 5px;
`