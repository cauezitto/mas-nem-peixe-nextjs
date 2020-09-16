import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 50px;
  margin: auto;

  background-color: #fafafa;

  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media(max-width: 800px){
    width: 90%;
  }

  .column{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 25%;

    svg{
        font-size: 2.5rem;
        color: #03989E;
        margin-right: 20px;
    }
    text{
        font-size: 1.5rem;
        font-family: 'Ubuntu Condensed', sans-serif;

    }
    strong{
        font-size: 1.5rem;
        font-family: 'Ubuntu Condensed', sans-serif;
    }
  }

  @media(max-width: 500px){

    .column{
        width: 30%;

        svg{
        font-size: 4rem;
        margin-right: 10px;
    }
    }
  }
`;
