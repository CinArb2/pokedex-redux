import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: ${props => props.maxWidth};
  margin: 2rem auto;

  ${props =>
  props.flex && css`
      display: flex;
      flex-wrap: wrap;
      gap:20px;
      justify-content: center;
    `
  }
`