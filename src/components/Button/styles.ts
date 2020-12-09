import styled, { css, DefaultTheme } from 'styled-components'
import { Props } from '.'

const buttonModifier = {
  sizes: {
    small: () => css`
      min-width: 50px;
      padding: 10px 15px;
    `,
    medium: () => css`
      min-width: 100px;
      padding: 10px 20px;
    `,
    large: () => css`
      min-width: 150px;
      padding: 15px 30px;
    `,
    block: () => css`
      min-width: 90%;
      padding: 15px 30px;
    `
  },
  background: {
    outline: (theme: DefaultTheme) => css`
      background: none;
      :hover {
        transition: 200ms;
        background-color: ${theme.colors.orange};
        color: ${theme.colors.white};
      }
    `,
    full: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.orange};
    `
  },
  textShadow: {
    shadow: (theme: DefaultTheme) => css`
      text-shadow: ${theme.font.textShadow};
    `
  }
}

export const Wrapper = styled.button<Props>`
  ${({
    theme,
    color,
    outline,
    radius = 'small',
    size = 'small',
    fontSize = 'small',
    textShadow = false,
    fontWeight = 'normal'
  }) => css`
    transition: 200ms;
    border-width: 3px;
    cursor: pointer;
    border-style: solid;
    font-family: ${theme.font.family.ubuntuCondensed};
    border-color: ${theme.colors.orange};
    color: ${theme.colors[color!]};
    border-radius: ${theme.border.radius[radius]};
    ${buttonModifier.sizes[size]}
    font-size: ${theme.font.sizes[fontSize]};
    font-weight: ${theme.font[fontWeight]};
    ${outline
      ? buttonModifier.background.outline(theme)
      : buttonModifier.background.full(theme)}
    ${textShadow ? buttonModifier.textShadow.shadow(theme) : ''}
  `}
`
