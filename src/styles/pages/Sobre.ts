import styled, { css } from 'styled-components'

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
        width: 50%;
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

    @media (max-width: ${theme.breakPoints.tablet}) {
      .history {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
          'historia historia historia'
          'line1 line1 line1'
          'instagram instagram instagram'
          'polvo . line2'
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
    }
  `}
`

export default Sobre
