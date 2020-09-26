import styled, {css} from 'styled-components';

const invertGradient = css`
  background: rgb(248,91,44);
  background: linear-gradient(157deg, rgba(248,91,44,1) 5%, rgba(40,152,158,1) 100%);
`

export const Container = styled.div`
  height: 50px;
  width: 90vw;
 
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  margin: 30px auto;

  .svg{
      font-size: 2.5rem;
      color: #FF5A00;
      margin: auto;
      margin-bottom: 10px;

      margin-right: 5px;

      @media(max-width: 1217px){
        display: none;
      }
    }

  .h1{
    color: #FF5A00;
    font-family: 'manjari', sans-serif;
    width: 45%;
    text-align: center;
    text-justify: center;
    line-height: 30px;
    font-size: ${props => props.fontSize}rem;

    @media(max-width: 430px){
    width: 60%;
    margin: auto;
    }
  }

  .strong{
    color: #414040;
    font-size: ${props => props.fontSize}rem;
  }

  .grid-with-icon{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    grid-template-areas: 'icon . text text text';

    .svg{
      grid-area: icon;
    }

    .h1{
      grid-area: text;
      width: 100%100px;
    }
  }
`;

export const Line = styled.div`
  width: ${props => props.width}%;
  height: 4px;

  background: rgb(40,152,158);
  background: linear-gradient(157deg, rgba(40,152,158,1) 25%, rgba(248,91,44,1) 100%);

  position: relative;

  margin: auto;

  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${props => props.invert && invertGradient}

  @media(max-width: 800px){
    width: 35%;
  }

  @media(max-width: 500px){
    width: 20%;
  }

  @media(max-width: 430px){
    width: 8%;
    margin: auto;
    }
`
