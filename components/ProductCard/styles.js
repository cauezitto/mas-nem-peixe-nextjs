import styled from 'styled-components';

export const Container = styled.a`
  cursor: pointer;
  
  width: 230px;

  margin: auto;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 10px;

  border: 3px solid #f1f1f1;

  border-radius: 20px;

  img{
      width: 100%;
      height: auto;
      margin: auto;
      margin-top: 0;
      margin-bottom: 15px;
  }

  :hover{
    transition: 300ms;
    border: 3px solid #FF5A00;

    button{
      background: #FF5A00;
      color: #fafafa;
    }
  }

  @media(max-width: 600px){
    width: 150px;
  }
  @media(max-width: 375px){
    width: 125px;
  }
  @media(max-width: 350px){
    width: 120px;
  }
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 70%;

  background: none;

  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: 3px solid #FF5A00;

  margin: auto;
  margin-top: 15px;

  font-size: 1.8rem;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-weight: 600;
  color: #FF5A00;

  transition: 250ms;

  :hover{
    transition: 250ms;
    
  }

  @media(max-width: 520px){
    width: 100%;
  }


  button{
      background: none;

      display: flex;
      outline: none;
      border: none;

      color: #fafafa;
      font-size: 1.4rem;

      text-align: center;
      
      margin: auto;
      line-height: 15px;
      text-indent: 5px;

      cursor: pointer;

      height: 100%;

      @media(max-width: 520px){
        text-indent: 2px;
  }

      svg{
          margin: auto;
          font-size: 2rem;
          text-align: center;
      }

      strong{
        margin: auto;
        text-align: center;
        font-family: 'Ubuntu Condensed', sans-serif;
      }
  }
`

export const Title = styled.h1`
    color: #000000;
    font-family: 'Manjari', sans-serif;
    font-size: 2rem;
    margin-bottom: 15px;
    text-align: center;
`

export const Price = styled.strong`
    font-family: 'Sunflower', sans-serif;
    font-size: 2.2rem;
    color: #FF5A00;

    text-align: center;
   
`

export const Installments = styled.span`
    font-family: 'Sunflower', sans-serif;
    font-weight: bold;
    color: #AAAAAA;
    font-size: 1.5rem;

    text-align: center;

    margin-bottom: 20px;
`
