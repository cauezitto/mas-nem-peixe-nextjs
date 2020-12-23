import styled, { css } from 'styled-components'

const Regulamentos = styled.div`
  ${({ theme }) => css`
    .regulation-item {
      position: relative;
    }

    .show {
      display: unset;
    }

    .hidden {
      display: none;
    }
    h2 {
      align-items: flex-start;
      justify-content: flex-start;
    }
    main {
      margin: 100px 0;

      img {
        margin-top: 0;
        margin-left: 0;
        display: none;
      }
    }

    .mobile {
      display: none;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .mobile {
        display: unset;
      }

      .desktop {
        display: none;
      }

      main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }

      p,
      h2 {
        text-align: center;
      }
    }
  `}
`

export default Regulamentos
