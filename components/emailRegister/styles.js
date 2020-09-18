import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 100px;
  margin: 10px auto;
  background-color: rgba(0, 0, 0, 0.83);
  border-radius: 10px;

  @media(max-width: 1236px){
    width: 90%;
  }
  @media(max-width: 1070px){
    flex-direction: column;
  }

  @media(max-width: 400px){
    width: 95vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 40%;

  svg{
      color: #fafafa;
      font-size: 4rem;
      margin: auto;
  }

  h1{
      margin: auto;
      color: #03989E;
      font-family: 'Manjari', sans-serif;
      font-size: 2rem;
  }

  @media(max-width: 1070px){
    width: 60%;
  }
  @media(max-width: 550px){
    width: 90%;
  }

  @media(max-width: 400px){
    width: 100%;
  }
`

export const Form = styled.form`
    display: flex;
    margin: auto;
    width: 50%;

    input{
        width: 50%;
        height: 30px;
        background: #F1F1F1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        border-radius: 10px;

        text-indent: 10px;
        font-family: 'Ubuntu Condensed', sans-serif;
        font-weight: bold;
    }

    button{
        margin: auto;
        width: 150px;
        height: 30px;

        border-radius: 10px;

        background: #FF5A00;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        color: #f2f2f2;
        font-family: 'Ubuntu Condensed', sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
    }

@media(max-width: 1070px){
    width: 60%;
  }
  @media(max-width: 680px){
    width: 70%;
  }
  @media(max-width: 550px){
    width: 90%;
  }

  @media(max-width: 400px){
    width: 95%;
  }
`
