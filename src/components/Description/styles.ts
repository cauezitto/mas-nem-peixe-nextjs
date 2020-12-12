import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family.ubuntu};
    margin-bottom: ${theme.spacings.xlarge};

    p {
      margin: ${theme.spacings.small} 0;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      text-align: center;
    }
  `}
`

export const Item = styled.li``
