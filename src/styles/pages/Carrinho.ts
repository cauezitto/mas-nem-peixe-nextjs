import styled, { css } from 'styled-components'

export const Legend = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.xlarge};
    margin: -${theme.spacings.large} auto;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
  `}
`
