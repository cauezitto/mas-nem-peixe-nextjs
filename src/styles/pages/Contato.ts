import styled, { css } from 'styled-components'
const Contato = styled.div`
  ${({ theme }) => css`
    .mobile {
      display: none;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
    }

    .contact-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .space-between {
      width: 100%;
      margin-top: ${theme.spacings.small};
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 65px;
      background-color: ${theme.colors.orange};
      border-radius: 50%;

      svg {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.extra};
      }
    }

    .social-media-links {
      display: flex;
    }

    .mini {
      width: 50px;
      height: 50px;

      svg {
        font-size: ${theme.font.sizes.xxlarge};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .title-wrapper {
        flex-direction: column-reverse;
      }

      .desktop {
        display: none;
      }

      .mobile {
        display: unset;
      }

      .space-between {
        flex-direction: column;
        justify-content: space-around;
      }

      .social-media-links,
      .social-media {
        justify-content: center;
        align-items: center;
        text-align: center;

        h2 {
          justify-content: center;
        }
      }

      input,
      textarea {
        border-radius: ${theme.border.radius.large};
      }
    }
  `}
`

export default Contato
