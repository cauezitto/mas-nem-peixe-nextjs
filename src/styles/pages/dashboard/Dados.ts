import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    .profile {
      margin: 0 auto;
      width: 100px;
      height: 100px;
      margin-top: 15px;
      border-radius: 50%;
      background-image: url('/img/silvio.jpg');
      background-position: center;
      background-size: cover;
    }

    .data-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'name name'
        'email phone'
        'address address'
        'password password';
      gap: 15px;
      width: 100%;

      margin-bottom: 20px;

      .name {
        width: 100%;
        grid-area: name;
      }
      .email {
        width: 100%;
        grid-area: email;
      }
      .phone {
        width: 100%;
        grid-area: phone;
      }
      .address {
        width: 100%;
        grid-area: address;
      }
      .password {
        width: 100%;
        grid-area: password;
      }

      input {
        margin-top: 10px;
        outline: 0;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
        /* margin: 0 auto; */
        border-radius: 50px;
        width: 60%;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      .data-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'name name'
        'email email'
        'phone phone'
        'address address'
        'password password';
    }
  `}
`

export default Container
