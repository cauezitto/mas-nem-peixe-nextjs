import styled, { css } from 'styled-components'
const Favoritos = styled.div`
  ${({ theme }) => css`
    .mobile {
      display: none;
    }
    .share-wrapper {
      display: flex;
      flex-direction: column;
      width: 600px;
      margin: 100px auto;
      align-items: center;
      justify-content: center;
      h2 {
        text-align: center;
      }

      .copy {
        font-size: ${theme.font.sizes.xlarge};
        margin-left: ${theme.spacings.xxsmall};
        cursor: pointer;
      }

      .options {
        display: flex;
        width: 400px;
        justify-content: space-between;
        margin-top: ${theme.spacings.small};

        a {
          text-decoration: none;
        }

        .facebook {
          background-color: #3b5998;
        }
        .twitter {
          background-color: #1da1f2;
        }
        .whatsapp {
          background-color: #4dc247;
        }
        .plus {
          background-color: #ff6550;
        }
      }

      .option {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        white-space: nowrap;
        color: ${theme.colors.white};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .share-wrapper {
        width: 100%;
      }

      .desktop {
        display: none;
      }

      .mobile {
        display: unset;
      }
    }
  `}
`

export default Favoritos
