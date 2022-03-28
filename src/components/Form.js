import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  & label{
    font-size: ${({theme})=> theme.font.size.small};
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`