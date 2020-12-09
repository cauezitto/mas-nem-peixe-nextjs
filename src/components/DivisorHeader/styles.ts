import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.xxlarge} 0;

    h1,
    h2,
    h3 {
      font-family: ${theme.font.family.manjari};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.orange};
      font-size: ${theme.font.sizes.xxlarge};
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      width: auto;
      white-space: nowrap;
    }

    svg {
      margin: auto;
      margin-bottom: 8px;
    }

    b {
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family.manjari};
      color: ${theme.colors.black};
    }

    .content-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
    }

    .content-wrapper h2 {
      margin: 0;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .content-wrapper {
        flex-direction: column;
      }

      .variable {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3px;
    background: rgb(40, 152, 158);
    background: linear-gradient(
      157deg,
      rgba(40, 152, 158, 1) 25%,
      rgba(248, 91, 44, 1) 100%
    );
    :first-child {
      margin-right: 1px;
    }
    :last-child {
      margin-left: 1px;
      background: rgb(248, 91, 44);
      background: linear-gradient(
        157deg,
        rgba(248, 91, 44, 1) 5%,
        rgba(40, 152, 158, 1) 100%
      );
    }
    margin-bottom: 5px;
  `}
`
