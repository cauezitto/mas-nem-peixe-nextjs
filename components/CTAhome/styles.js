import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  min-height: 250px;

  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)) ;

  gap: 30px;

  margin-top: 10px;

  @media(max-width: 400px){
    grid-template-columns: repeat(auto-fit, minmax(90%, 1fr)) ;
  }
`;

export const Item = styled.img`
  width: 100%;

  margin: auto;

  cursor: pointer;

  border-radius: 5px;

  @media(max-width: 420px){
    height: auto;
    width: 90%;
  }
`
