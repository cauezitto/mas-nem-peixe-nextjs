import styled, { css } from 'styled-components'
import { Props } from '.'

export const Wrapper = styled.h2<Props>`
  ${({
    theme,
    font = 'manjari',
    fontSize = 'xxxlarge',
    justify = 'flex-start',
    color = 'orange',
    fontWeight = 'bold',
    margin
  }) => css`
    display: flex;
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[fontSize]};
    font-family: ${theme.font.family[font]};
    margin: ${theme.spacings.small} 0;
    font-weight: ${theme.font[fontWeight]};
    display: flex;
    align-items: center;
    justify-content: ${justify};
    align-items: flex-start;

    ${margin &&
    css`
      margin: ${margin};
    `}

    svg {
      color: ${theme.colors.cyan};
    }
  `}
`
