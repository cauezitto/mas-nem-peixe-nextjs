import styled, { css } from 'styled-components'
import { Props } from '.'

export const Wrapper = styled.h2<Props>`
  ${({ theme, font = 'manjari' }) => css`
    color: ${theme.colors.orange};
    font-size: ${theme.font.sizes.xxxlarge};
    font-family: ${theme.font.family[font]};
    margin: ${theme.spacings.small} 0;
    font-weight: ${theme.font.bold};
    display: flex;
    align-items: center;
  `}
`
