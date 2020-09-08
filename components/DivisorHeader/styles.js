import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 90vw;
 
  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;

  margin: auto;

  h1{
    color: #FF5A00;
    font-family: 'manjari', sans-serif;
    width: 40%;
    text-align: center;
    text-justify: center;
    font-size: 3rem;

    @media(max-width: 430px){
    width: 30%;
    margin: auto;
  }
  }
`;

export const Line = styled.div`
  width: 75%;
  height: 4px;

  background: #03989E;

  position: relative;

  margin: auto;

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media(max-width: 800px){
    width: 35%;
  }

  @media(max-width: 500px){
    width: 20%;
  }
`
