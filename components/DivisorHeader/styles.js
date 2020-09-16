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
`
