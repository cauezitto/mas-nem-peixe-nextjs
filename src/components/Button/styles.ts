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
      min-width: 100%;
      padding: 10px 30px;
    `
  },
  background: {
    outline: (
      theme: DefaultTheme,
      color: 'orange' | 'gray' | 'darkGray' | 'cyan' | 'mediumGray'
    ) => css`
      background: none;
      :hover {
        transition: 200ms;
        background-color: ${theme.colors[color]};
        color: ${theme.colors.white};
      }
    `,
    full: (
      theme: DefaultTheme,
      background: 'cyan' | 'orange' | 'gray' | 'darkGray' | 'mediumGray'
    ) => css`
      background-color: ${theme.colors[background]};
    `
  },
  textShadow: {
    shadow: (theme: DefaultTheme) => css`
      text-shadow: ${theme.font.textShadow};
    `
  },
  height: (height: number) => css`
    height: ${height}px;
  `
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
    fontWeight = 'normal',
    fontFamily = 'ubuntuCondensed',
    background = 'orange'
  }) => css`
    transition: 200ms;
    border-width: 3px;
    cursor: pointer;
    border-style: solid;
    font-family: ${theme.font.family[fontFamily!]};
    border-color: ${theme.colors[background]};
    color: ${theme.colors[color!]};
    border-radius: ${theme.border.radius[radius]};
    ${buttonModifier.sizes[size]}
    font-size: ${theme.font.sizes[fontSize]};
    font-weight: ${theme.font[fontWeight]};
    ${outline
      ? buttonModifier.background.outline(theme, background)
      : buttonModifier.background.full(theme, background)}
    ${textShadow ? buttonModifier.textShadow.shadow(theme) : ''}
  `}
`
