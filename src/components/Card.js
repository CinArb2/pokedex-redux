import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  border: 3px solid black;
  border-radius: 20px;
  padding: 1rem;
  text-align:center;

`

export const CardImg = styled.img`
  height: 200px;
  width: 80%;
  max-width: 150px;
  margin: 0 auto;
`

export const CardTitle = styled.h2`
  font-size: 2rem;
  margin-block: 0.5rem;
`

export const CardText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;

  & span{
    text-transform: uppercase;
    color: #9F9F9F;
  }
`

export const CardInfo = styled.div`
  border-top: 1px solid #E5E5E5;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export const CardDetail = styled.div`
  width: 40%;
`
