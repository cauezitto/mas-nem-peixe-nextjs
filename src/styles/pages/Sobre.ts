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
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'historia historia historia'
        'line1 line1 line1'
        '. instagram instagram'
        '. instagram instagram'
        'polvo . line2'
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
      justify-content: center;
    }

    .loja {
      grid-area: loja;
    }

    .line3 {
      grid-area: line3;

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

      svg {
        font-size: 50px;
        color: ${theme.colors.cyan};
      }
    }

    .wave {
      display: flex;
      grid-area: wave;
      align-items: center;
    }
  `}
`

export default Sobre
