import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  align-items: center;
  margin: auto;

  img{
    width: 100%;
  }

  @media(max-width: 420px){
    width: 80vw;
  }
`;
