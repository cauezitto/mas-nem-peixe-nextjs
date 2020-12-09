import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    margin: ${theme.spacings.xxlarge} auto;
    background: rgba(0, 0, 0, 0.83);
    border-radius: ${theme.border.radius.large};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacings.xsmall};

    .title-wrapper {
      display: flex;
    }

    h3 {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 0;
      text-justify: center;
      font-family: ${theme.font.family.manjari};
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.cyan};
      margin: 0;
      grid-area: text;
    }

    input {
      background-color: ${theme.colors.white};
      height: 40px;
      width: 300px;
      border-radius: ${theme.border.radius.large};
      font-weight: ${theme.font.bold};
      grid-area: input;
    }

    button {
      grid-area: button;
    }

    svg {
      margin: auto;
      color: ${theme.colors.white};
    }

    @media (max-width: ${theme.breakPoints.laptopS}) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px 30px;
      height: auto;
      grid-template-areas:
        'text text text text'
        '. . . .'
        'input input input button'
        '. . . .';
      padding: ${theme.spacings.small};

      input {
        width: auto;
      }

      h3 {
        text-align: center;
        justify-content: center;
        width: 100%;
      }
    }
  `}
`
