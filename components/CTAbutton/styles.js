import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px auto;
`;

export const Button = styled.button`
    margin: auto;
    border:#FF5A00 5px solid;
    border-radius: 8px;

    height: 55px;
    width: 230px;

    background: none;

    transition: 250ms;

    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');

    cursor: pointer;

    strong{
      color: #414040;
      font-family: 'Ubuntu Condensed', sans-serif;
      font-size: 2.4rem;
      font-weight: bolder;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    :hover{
        background: #FF5A00;

        strong{
        color: #fafafa;
        font-family: 'Ubuntu Condensed', sans-serif;
        font-size: 18pt;
        }
    }
`
