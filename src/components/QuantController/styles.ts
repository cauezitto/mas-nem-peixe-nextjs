import styled, { css } from 'styled-components'
type StyleProps = {
  size: 'small' | 'medium' | 'large' | 'block'
}

const wrapperModifier = {
  width: {
    small: css`
      width: 60%;
    `,

    medium: css`
      width: 70%;
    `,

    large: css`
      width: 80%;
    `,

    block: css`
      width: 100%;
    `
  }
}

export const Wrapper = styled.div<StyleProps>`
  ${({ theme, size = 'small' }) => css`
    border: 2px ${theme.colors.gray} solid;
    border-radius: ${theme.border.radius.small};
    height: 60px;
    ${wrapperModifier.width[size]}
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin: ${theme.spacings.small} 0;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-justify: center;
      margin-bottom: 5px;
      font-size: ${theme.font.sizes.xxlarge};
    }

    button {
      border: 0;
      padding: 0;
      margin: 0;
      outline: 0;
      align-items: center;
      justify-content: center;
      font-size: ${theme.font.sizes.extra};
      color: ${theme.colors.darkGray};
      cursor: pointer;

      svg {
        margin: auto;
      }
    }
  `}
`
