import styled, { css } from 'styled-components'

type Props = {
  desktop?: boolean
  mobile?: boolean
}

const displayNone = css`
  display: none;
`

const displayUnset = css`
  display: unset;
  background: none;
`

export const Wrapper = styled.section<Props>`
  ${({ theme, desktop = true, mobile = false }) => css`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 10px;
    ${mobile && displayNone}

    .paging-item {
      display: none;
    }

    button {
      background: none;
      border: none;
    }
    @media (max-width: ${theme.breakPoints.tablet}) {
      ${desktop && displayNone}
      ${mobile && displayUnset}
    }
  `}
`

export const Info = styled.h3<Props>`
  ${({ theme, mobile }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    background-color: ${theme.colors.white};

    ${mobile &&
    css`
      width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      margin: auto;
      height: 50px;
    `}

    svg {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.cyan};
    }
  `}
`
