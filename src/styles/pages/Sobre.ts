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
        'polvo polvo line2'
        '. . line2'
        'loja loja loja'
        '. line3 .'
        '. wait wave';
      gap: 20px;
    }

    .historia {
      grid-area: historia;
    }

    .line1 {
      grid-area: line1;
    }

    .instagram {
      grid-area: instagram;
    }

    .line2 {
      grid-area: line2;
    }

    .polvo {
      grid-area: polvo;
    }

    .loja {
      grid-area: loja;
    }

    .line3 {
      grid-area: line3;
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
