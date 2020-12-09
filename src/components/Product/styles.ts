import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    list-style: none;
    margin: auto;
    width: 250px;
    cursor: pointer;
    text-align: center;
    padding: 10px 15px;
    border-radius: ${theme.border.radius.large};

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    border: 3px ${theme.colors.silver} solid;

    :hover {
      border: 3px ${theme.colors.orange} solid;

      button {
        background-color: ${theme.colors.orange};
        color: ${theme.colors.white};
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      width: 160px;
    }
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family.manjari};
    margin: 10px 0 20px 0;
    @media (max-width: ${theme.breakPoints.mobileL}) {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.orange};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const Installments = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    margin-bottom: 20px;
  `}
`
