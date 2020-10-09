import styled from 'styled-components';

export const Container = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) ;
  width: 80vw;
  gap: 30px;

  margin: 30px auto;

  justify-content: center;

  .mobile{
    display: none;
  }

  img{
      max-width: 100%;
      border-radius: 5px;
  }

  @media(max-width:600px){
    width: 100vw;

    .mobile{
      display: block;
    }
    .desktop{
      display: none;
    }
  }
`;
