import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 10%;
    max-width: 2000px;
    margin: auto;

    @media (max-width: ${theme.breakPoints.mobileL}) {
      padding: 0 5%;
    }
  `}
`
