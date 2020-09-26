import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 50px;

  display: flex;
  position: relative;

  @media(max-width: 800px){
    flex-direction: column;
    height: 60px;

    margin-top: 10px;

    display: none;
  }
`;

export const SocialLinksContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;

    margin-left: 5%;

    height: 100%;
    width: 230px;

    text-align: center;

    a{
    color: #f85b2c;
    font-size: 3.1rem;
    margin: auto;
    cursor: pointer;
  }

  @media(max-width: 800px){
   
      position: relative;

      margin: auto;

      align-items: center;

      width: 100%;

      a{
        margin: 10%;
      }

      a:first-child {
        margin: unset;
        position: absolute;
        left: 9%;
      }

      a:last-child {
        margin: unset;
        position: absolute;
        right: 9%;
      }
  }
`

export const WhatsappNumberContainer = styled.div`
  position: absolute;
  right: 7%;
  height: 100%;
  display: flex;

  align-items: center;

  h1{
    font-family: 'Ubuntu Condensed', sans-serif;
    font-weight: normal;
    font-size: 2rem;
  }

  svg{
    color: #f85b2c
  }

  @media(max-width: 800px){
   position: unset;
   text-justify: center;
   justify-content: center;

   order: -1;

   h1{
     height: auto;
     text-align: center;
   }
}
`


