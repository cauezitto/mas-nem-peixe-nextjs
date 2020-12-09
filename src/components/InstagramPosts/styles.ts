import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.large};
    .post {
      border-radius: ${theme.border.radius.medium};
      border: 1px ${theme.colors.silver} solid;
      cursor: pointer;
      :hover {
        border: 1px black solid;
      }
    }
    }

    @media (max-width: ${theme.breakPoints.tablet}){
      display: none;
    }
  `}
`

export const MobileWrapper = styled.div`
  ${({ theme }) => css`
    display: none;
    .post {
      border-radius: ${theme.border.radius.medium};
      border: 1px ${theme.colors.silver} solid;
      cursor: pointer;
      :hover {
        border: 1px black solid;
      }
    }
    }

    @media (max-width: ${theme.breakPoints.tablet}){
      display: unset;
    }
  `}
`
