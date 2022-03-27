import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  border: 3px solid black;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
  margin: 0 auto;
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

export const CardSubTitle = styled.h3`
  font-size: 1.3rem;
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
  max-width: ${props => props.maxWidth};
  margin: 1rem auto;
  border-top: 1px solid #E5E5E5;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export const CardDetail = styled.div`
  width: ${(props) => props.width || '40%'};
  margin: 0 ${(props) => props.margin || '0'};
`
export const CardOpened = styled(Card)`
  width: 90%;
  max-width: 1300px;
  margin-block: 3rem;
`

export const CardBox = styled.p`
  font-size: 1.6rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.color || 'black'};
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin: 0.5rem;
  display: inline-block;
  color: ${(props) => props.color ? 'white' : 'black'};
`

export const CardStats = styled.div`
  width: 100%;
  height: 20px;
  background-color: gray;
  position: relative;
  margin-block: 1rem;

  &:after{
    content: ' ';
    width: 50%;
    height: 20px;
    background-color: green;
    position: absolute;
    left: 0;
  }

  &:before{
    content: '50/100';
    position: absolute;
    right: 0;
    top: -105%;
  }
`