import styled, { css } from 'styled-components'
import { Props } from '.'

const linkModifier = {
  underline: css`
    text-decoration: underline;
  `
}

export const Wrapper = styled.a<Props>`
  ${({
    theme,
    color = 'cyan',
    font = 'ubuntu',
    underline,
    fontSize = 'xlarge',
    fontWeight = 'normal'
  }) => css`
    color: ${theme.colors[color]};
    font-family: ${theme.font.family[font]};
    ${underline && linkModifier.underline}
    font-size: ${theme.font.sizes[fontSize]};
    font-weight: ${theme.font[fontWeight]};
  `}
`
