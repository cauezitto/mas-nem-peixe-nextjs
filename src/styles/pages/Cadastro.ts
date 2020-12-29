import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    max-width: 1445px;
    height: 100vh;
    max-height: 850px;
    margin: auto;
    align-self: center;
    justify-self: center;
    justify-content: space-between;
  input, button{
    outline: 0;
  }
    .sub-container {
      display: flex;
      flex: 1;
      height: 100%;
      max-width: 1445px;
      max-height: 850px;
    }

    .go2login {
      display: flex;
      min-height: 100%;
      width: 40%;
      padding: ${theme.spacings.small} ${theme.spacings.xlarge};
      /* border: 1px solid; */
      justify-content: center;

      .content {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        /* border: 1px solid; */

        button {
          border-radius: 50px;
        }
      }

      .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .register-wrapper {
      height: 100%;
      flex: 1;
      background: rgb(3, 152, 158);
      background: linear-gradient(
        0deg,
        rgba(3, 152, 158, 1) 0%,
        rgba(40, 210, 215, 1) 50%,
        rgba(3, 152, 158, 1) 100%
      );
      padding: ${theme.spacings.medium} ${theme.spacings.xxxgiant}
        ${theme.spacings.medium} ${theme.spacings.xxxgiant};
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      justify-content: flex-start;
      align-items: flex-start;
      grid-template-areas:
        'title title'
        'icons icons'
        'text text'
        '. .'
        '. .'
        'name name'
        'email phone'
        'address address'
        'password password'
        '. .'
        '. .'
        'send send';

      .title {
        grid-area: title;
      }

      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: icons;

        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.white};
          margin: ${theme.spacings.xsmall};
          font-size: ${theme.font.sizes.xxlarge};
          border: 2px solid ${theme.colors.white};
          height: 50px;
          width: 50px;
          border-radius: 50%;
          cursor: pointer;
        }
      }

      input {
        margin-top: 10px;
      }

      .text {
        grid-area: text;
      }

      .name {
        grid-area: name;
        padding: 0 ${theme.spacings.large};
      }

      .email {
        grid-area: email;
        padding: 0 0 0 ${theme.spacings.large};
      }

      .phone {
        grid-area: phone;
        padding: 0 ${theme.spacings.large} 0 0;
      }

      .address {
        grid-area: address;
        padding: 0 ${theme.spacings.large};
      }

      .password {
        grid-area: password;
        padding: 0 ${theme.spacings.large};
      }

      .send {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: send;

        button{
          width: 300px;
          border-radius: 50px:
        }
      }
    }

    .go2login-mobile{
      display: none;
      /* position: fixed; */
      top: 0;
      width: 100%;
      text-align: center;
      padding: ${theme.spacings.xsmall};
      background-color: ${theme.colors.silver};
      font-size: ${theme.font.sizes.xlarge};
      font-family: ${theme.font.family.ubuntu};
      border-radius: 0 0 20px 20px;
    }

    @media (min-width: 1445px){

      .register-wrapper{
        border-radius: 0 50px 50px 0;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}){
      .sub-container{
        flex-direction: column;
      }

      .go2login{
        display: none;
      }

      .go2login-mobile-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.cyan};
        width: 100%;
      }

      .go2login-mobile{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .register-wrapper{
        height: auto;
        grid-template-areas:
        'title title'
        'icons icons'
        'text text'
        'name name'
        'email email'
        'phone phone'
        'address address'
        'password password'
        '. .'
        '. .'
        'send send';

        gap: 5px;

        padding: ${theme.spacings.xsmall};
       .title h2{
          font-size: ${theme.font.sizes.extra};
        }


      .name {
        grid-area: name;
        padding: 0;
      }

      .email {
        grid-area: email;
        padding: 0;
      }

      .phone {
        grid-area: phone;
        padding: 0;
      }

      .address {
        grid-area: address;
        padding: 0;
      }

      .password {
        grid-area: password;
        padding: 0;
      }

      .send {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: send;
      }
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}){

    }
  `}
`

export default Container
