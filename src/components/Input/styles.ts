import styled, { css } from 'styled-components'
import { Props } from '.'

const outlineModfier = {
  none: css`
    outline: none;
  `,
  background: css`
    background-color: #fff;
  `
}

const widthModifier = {
  full: css`
    width: 100%;
  `
}

export const Wrapper = styled.input<Props>`
  ${({
    theme,
    radius = 5,
    height = 40,
    width = 150,
    fontSize = 'large',
    font = 'ubuntu',
    outline = true,
    block = false,
    margin,
    borderColor = 'gray'
  }) => css`
    border-width: 2px;
    border-color: ${theme.colors[borderColor]};
    border-style: solid;
    border-radius: ${radius}px;
    height: ${height}px;
    width: ${width}px;
    font-size: ${theme.font.sizes[fontSize]};
    font-family: ${theme.font.family[font]};
    ${outline ? outlineModfier.none : outlineModfier.background}
    ${block && widthModifier.full}
    ${margin &&
    css`
      margin: ${margin};
    `}
  `}
`

export const TextArea = styled.textarea<Props>`
  ${({
    theme,
    radius = 5,
    height = 40,
    width = 150,
    fontSize = 'large',
    font = 'ubuntu',
    outline = true,
    block = false,
    margin,
    borderColor = 'gray'
  }) => css`
    text-indent: 10px;
    border-width: 2px;
    border-color: ${theme.colors[borderColor]};
    border-style: solid;
    border-radius: ${radius}px;
    height: ${height}px;
    width: ${width}px;
    font-size: ${theme.font.sizes[fontSize]};
    font-family: ${theme.font.family[font]};
    ${outline ? outlineModfier.none : outlineModfier.background}
    ${block && widthModifier.full}
    ${margin &&
    css`
      margin: ${margin};
    `}
  `}
`
