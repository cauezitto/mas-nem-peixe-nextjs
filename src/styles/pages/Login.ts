import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    .sub-wrapper{
      display: flex;
      width: 100%;
      max-width: 1445px;
      height: 100vh;
      max-height: 850px;
      margin: auto;
      align-self: center;
      justify-self: center;
      justify-content: space-between;
    }
    .subscribe-wrapper {
      height: 100%;
      display: grid;
      flex: 1;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'logo logo'
        'people subscribe'
        '. .';
      padding: ${theme.spacings.small};

      .logo{
        grid-area: logo;
        height: 100px;
      }

      .people{
        grid-area: people:
      }
      .subscribe{
        grid-area: subscribe;
      }
    }

    .form-wrapper {
      padding: 0 ${theme.spacings.medium};
      height: 100%;
      width: 450px;
      background: rgb(215,77,1);
      background: linear-gradient(360deg, rgba(215,77,1,1) 0%, rgba(255,90,0,0.7959558823529411) 47%, rgba(215,77,1,1) 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input,
      button {
        box-shadow: ${theme.boxShadow};
        outline: 0;
      }

      form {
        width: 100%;
        height: 400px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          'login login'
          'password password'
          'remenber forgeted'
          'send send';

        .login {
          grid-area: login;
        }
        .password {
          grid-area: password;
        }
        .remenber {
          grid-area: remenber;
          display: flex;
          align-items: flex-start;

          color: ${theme.colors.white};
          font-family: ${theme.font.family.ubuntu};

          input {
            border: 0;
            margin: 0;
            padding: 0;
            cursor: pointer;
          }
        }
        .forgeted {
          grid-area: forgeted;
          justify-content: flex-end;
          text-align: right;
        }
        .send {
          grid-area: send;
        }
      }
    }

    .subscribe-mobile{
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding: ${theme.spacings.xsmall};
      background-color: ${theme.colors.silver};
      font-size: ${theme.font.sizes.xlarge};
      font-family: ${theme.font.family.ubuntu};
      border-radius: 20px 20px 0 0;
    }

    @media (min-width: 1446px){
      flex: 1;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.white};

      .form-wrapper{
        border-radius: 0 50px 50px 0;
      }

      .subscribe-wrapper{
        border-radius: 50px 0 0 50px;
        background-color: ${theme.colors.silver};
        padding: ${theme.spacings.xgiant};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}){
      .sub-wrapper{
        flex-direction: column;
        justify-content: flex-start;
      }
      .subscribe-wrapper{
        display: none;
      }
      .subscribe-mobile{
        display: unset;
      }
      .form-wrapper{
        width: 100%;
        padding: ${theme.spacings.large};

        form{
          height: 400px;
        }

        button, label input{
          height: 60px;
        }
      }
    }
  `}
`

export default Container
