import styled from 'styled-components';

export const Container = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) ;
  width: 90vw;
  gap: 30px;

  margin: 30px auto;

  justify-content: center;

  img{
      max-width: 100%;
      border-radius: 5px;
  }

  @media(max-width: 600px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr)) ;
  }

  @media(max-width: 400px){
    width: 100vw;
  }
`;
