import styled, { css } from 'styled-components'
import theme from 'styles/theme'

const Sobre = styled.div`
  ${({ theme }) => css`
    .banner {
      background-image: url('/img/bannerSobre.png');
      background-size: contain;
      width: 100%;
    }

    .history {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas:
        'historia historia historia'
        'line1 line1 line1'
        '. instagram instagram'
        '. instagram instagram'
        'polvo polvo line2'
        'loja loja line2'
        '. line3 .'
        '. wait wave';

      gap: 20px;
    }

    .historia {
      grid-area: historia;
    }

    .line1 {
      grid-area: line1;

      img {
        width: 52%;
      }
    }

    .instagram {
      grid-area: instagram;
      margin-top: -250px;

      p {
        width: 90%;
      }

      svg {
        color: ${theme.colors.black};
      }
    }

    .line2 {
      grid-area: line2;

      img {
        height: 65%;
      }
    }

    .polvo {
      grid-area: polvo;
      display: flex;
      align-items: center;

      img {
        width: 70%;
      }
    }

    .loja {
      grid-area: loja;

      svg {
        color: ${theme.colors.black};
      }
    }

    .line3 {
      grid-area: line3;
      margin-top: -150px;

      margin-left: 21%;
      width: 60%;

      img {
        width: 52%;
      }
    }

    .wait {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-area: wait;
      h2 {
        text-align: center;
      }

      svg {
        font-size: 50px;
        color: ${theme.colors.cyan};
      }
    }

    .wave {
      display: flex;
      grid-area: wave;
      align-items: flex-end;
    }

    .video-section {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 500px;
      margin: ${theme.spacings.large} 0;

      display: flex;
      align-items: center;

      h2 {
        font-size: 7rem;
      }

      img {
        height: 400px;
      }

      .sub-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-around;
      }

      .orange-gradient {
        background: rgb(215, 77, 1);
        background: linear-gradient(
          360deg,
          rgba(215, 77, 1, 1) 0%,
          rgba(255, 90, 0, 1) 50%,
          rgba(215, 77, 1, 1) 100%
        );

        position: absolute;
        height: 350px;
        width: 100%;
        z-index: -1;
      }
    }

    .mission-and-vision {
      display: flex;
      justify-content: space-around;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      h2 {
        margin-top: 60px;
      }

      .icon {
        margin-bottom: -50px;
      }
    }

    .values {
      margin-top: 200px;

      h2 {
        text-align: center;
      }

      .text-box-wrapper {
        display: flex;
      }

      .text-box {
        .show {
          animation: fadeIn 500ms;
        }

        .hidden {
          display: none;
        }
      }

      .text-selector-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: ${theme.spacings.medium};
        background-color: ${theme.colors.orange};
        color: ${theme.colors.white};
        border-radius: ${theme.border.radius.large};
        font-size: ${theme.font.sizes.xxxlarge};
        font-weight: ${theme.font.bold};
        font-family: ${theme.font.family.manjari};
        z-index: 5;

        .selected {
          color: ${theme.colors.black};
        }

        span {
          cursor: pointer;
        }
      }
    }

    .go2contact {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        text-align: center;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.cyan};
        color: ${theme.colors.white};
        font-family: ${theme.font.family.manjari};
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.bold};
        text-decoration: none;
        padding: 0 ${theme.spacings.xsmall};

        height: 55px;
        text-align: center;
        border-radius: 50px;
        margin-top: 20px;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .history {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
          'historia historia historia'
          'line1 line1 line1'
          'instagram instagram instagram'
          'polvo polvo line2'
          'loja loja loja'
          '. line3 .'
          'wait wait wait'
          'wave wave wave';
      }

      .instagram {
        margin-top: 10px;

        p {
          width: 100%;
        }
      }

      .line2 {
        img {
          height: auto;
          width: 100%;
        }
      }

      .polvo {
        img {
          width: 100%;
        }
      }
      .line3 {
        margin-top: 0;
      }

      .wave {
        justify-content: flex-end;
      }

      .video-section {
        img {
          height: 350px;
        }

        h2 {
          font-size: ${theme.font.sizes.max};
        }

        .orange-gradient {
          height: 500px;
        }
      }

      .mission-and-vision {
        flex-direction: column;

        .item {
          margin-bottom: 60px;
        }
      }

      .values {
        margin-top: 50px;

        .text-box-wrapper {
          flex-direction: column;
        }

        .text-selector-wrapper {
          flex-direction: row;
          margin: auto;
          margin-bottom: -40px;
          width: 90%;
        }

        .text-box {
          height: auto;
        }
      }
    }

    @media (max-width: ${theme.breakPoints.mobileS}) {
      .video-section {
        h2 {
          font-size: ${theme.font.sizes.xxxlarge};
        }
        img {
          height: 300px;
        }

        .orange-gradient {
          height: 425px;
        }
      }
    }
  `}
`

export default Sobre
