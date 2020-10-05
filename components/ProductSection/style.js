import styled from 'styled-components';

export const Container = styled.div`
  display:  flex;
  justify-content: center;
  margin-top: 30px;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 80%;
  max-width: 2024px;
  min-height: 800px;

  display: grid;
  gap: 0 50px;

  grid-template-columns: 2fr 1fr;

  grid-template-areas: 'img panel'
                       'img panel'
                       'links panel'
                       '. panel'
                       '. .'
                        ;
`

export const Panel = styled.div`
  grid-area: panel;

  h1{
    font-family: 'Manjari', sans-serif;
    font-style: normal;
    font-weight: 500;
    padding: 10px;
    font-size: 2.5rem;
  }

  .reference{
    font-family: 'Ubuntu', sans-serif;
    margin-left: 10px;
  }

  .favorite-container{
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-left: 10px;
      font-family: 'Ubuntu', sans-serif;

      svg{
        color: #03989E;
        margin-right: 5px;
        cursor: pointer;
      }
  }
`

export const ProductContainer = styled.div`
  grid-area: img;
`
export const CarouselContainer = styled.div`
  margin: auto;
  margin-left: 0;
  padding: 20px;
  width: 400px;

  .message{
    color: #03989E;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.3rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Preview = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 150px;
  height: 60px;

  margin-bottom: 30px;

  background: #f1f1f1;

  img{
      height: 100%;
      border: 1px solid #F85B2C;
      border-radius: 5px;
      margin: 0 5px;
      padding: 5px;
  }
`

export const Share = styled.div`
    width: 80%;
    padding: 20px;

    span{
        color: #000000;
        font-family: 'Ubuntu', sans-serif;
        font-style: normal;
        font-weight: normal;
        margin-left: 30px;
    }

    div{
        display: flex;
        width: 100%;
        margin-top: 10px;
        align-items: center;
        .midia{
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #28989e;
            margin: 10px;
            font-size: 2rem;
            border: 2px solid;
            border-radius: 10px;
            font-weight: bold;

            :first-child{
        margin-left: 30px;
    }
        }

        .circle{
            border-radius: 50%;
        }
    }
`

export const ColoredMediaContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 3px;
    color: #fafafa;
    background-color: ${props => props.color};
    font-family: sans-serif;
    font-size: 1.6rem;

    margin: 10px;
    cursor: pointer;

    :first-child{
        margin-left: 30px;
    }
    :hover{
        transition: 250ms;
        box-shadow: inset 0 0 0.1em black, 0 0 1em black;

    }

    svg{
        margin-right: 10px;
    }
`
export const PriceAndInstalments = styled.div`

  display: flex;
  flex-direction: column;
  
  padding: 30px 10px;

  .price{
    color: #FF5A00;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
  }

  .instalments{
    color: #4C4949;
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
    font-size: 1.7rem;
    margin-top: 10px;
  }

  .information{
    margin-top: 10px;
    text-decoration-line: underline;
    color: #000000;
    font-family: 'Ubuntu', sans-serif;
  }
`

export const Quant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9em;
  height: 40px;
  border: 2px solid #C2C2C2;
  border-radius: 10px;

  button{
    display: flex;
    margin: auto;
    font-size: 2.5rem;
    color: #AAAAAA;
    cursor: pointer;
  }

  span{
    font-family: 'Ubuntu', sans-serif;
    margin: auto;
  }
`

export const BuyorCart = styled.form`
  margin-left: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  font-family: 'Ubuntu', sans-serif;
  font-size: 1.8rem;

  button{
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Ubuntu', sans-serif;
    height: 30px;
    width: 100%;
    height: 40px;

    border-radius: 5px;
    font-weight: bold;

    cursor: pointer;
  }

  .buy{
    background-color: #F85B2C;
    color: #f2f2f2;
    font-size: 1.8rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .cart{
    border: 2px solid #F85B2C;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.83);

    
  }
`

export const Shipment = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 30px;

  strong{
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: bold;
  }

  .input-container{
    display: flex;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    margin: 10px 0;
    border: 2px solid #C2C2C2;
    border-radius: 10px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 0;
    height: 28px;
    width: 110px;

    background: #fafafa;
  }

  input{
      text-indent: 10px;
    }

    button{
      margin: auto 0;
      border: 2px #F85B2C;
      background-color: #F85B2C;
      color: #E9EAE9;
      font-weight: bold;
      cursor: pointer;

      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;

      height: 32px;
      width: 50px;
    }
`

