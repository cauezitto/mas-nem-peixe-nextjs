import styled, {css} from 'styled-components';

const centered = css`
  text-align: center;
  text-indent: 0;
`

const clickable = css`
  cursor: pointer;
`

export const Container = styled.div`
  min-height: 190px;
  width: 100vw;

  background: #03989E;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Subcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) ;
  width: 80vw;
  gap: 30px;

  margin: auto;
`

export const Column = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;

  margin: auto;
  margin-top: 0;

  .input-container{
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 30px;
    background: #fafafa;

    margin-bottom: 30px;
    border-radius: 5px;

    input{
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 12pt;
        font-weight: bold;
        text-indent: 5px;
    }

    .confirm {
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 12pt;
        color: #FF5A00;
        font-weight: bold;
        margin: auto;
        margin-right: 10px;
        width: 30px;
        cursor: pointer;
    }
  }
`

export const Title = styled.h3`
  font-family: 'Ubuntu Condensed', sans-serif;
  color: #fafafa;
  font-size: 14pt;
  font-weight: bold;

  width: 100%;
  text-align: left;
 

  margin-top: 20px;
  margin-bottom: 10px;

  @media(max-width: 430px){
    text-align: center;
    text-indent: 0;
  }

  ${props => props.centered  && centered}
`

export const Text = styled.strong`
  font-family: 'Ubuntu Condensed', sans-serif;
  color: #fafafa;
  font-size: 14pt;
  font-weight: bold;

  width: 100%;
  text-align: left;

  margin-top: 3px;

  @media(max-width: 430px){
    text-align: center;
    text-indent: 0;
  }

  ${props => props.clickable && clickable}
  ${props => props.centered && centered}
`
export const IconContainer = styled.div`

  display: flex;
  align-items: center;
  width: 100%;

  justify-content: center;
  
  svg{
      background: #FF5A00;
      color: #fafafa;
      padding: 8px;
      border-radius: 50%;

      margin: 10px;

      cursor: pointer;
  }

  img{
      width: 90%;
      margin: 10px;
  }
`
