import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;

  ${props =>
  props.flex && css`
      display: flex;
      flex-wrap: wrap;
      gap:20px;
    `
  }
`