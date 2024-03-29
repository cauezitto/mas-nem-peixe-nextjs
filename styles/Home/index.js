import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)) ;
  width: 80vw;
  gap: 30px;

  margin: auto;

  justify-content: center;

  @media(max-width: 600px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    
    width: 90vw;
  }

  @media(max-width: 400px){
    width: 100vw;
    gap: 10px;
  }
`;
