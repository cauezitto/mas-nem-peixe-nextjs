import styled, { css } from 'styled-components'

interface BlockProps {
  area?: string
}
export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: rgb(3, 152, 158);
    background: linear-gradient(
      0deg,
      rgba(3, 152, 158, 1) 0%,
      rgba(40, 210, 215, 1) 50%,
      rgba(3, 152, 158, 1) 100%
    );
    padding: ${theme.spacings.small} 0;
  `}
`

export const SubWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'one two three four five'
      '. . six . .';
    width: 100%;
    gap: ${theme.spacings.xsmall};

    @media (max-width: ${theme.breakPoints.tablet}) {
      grid-template-columns: repeat(3, 1fr);
      gap: ${theme.spacings.small};
      grid-template-areas:
        'one two three'
        'four . five'
        '. six .';
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const Block = styled.div<BlockProps>`
  ${({ theme, area }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: ${area};
    h3 {
      color: ${theme.colors.white};
      text-align: center;
    }

    nav {
      display: flex;
      flex-direction: column;
      margin-top: ${theme.spacings.xsmall};
      text-align: center;
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xlarge};

      a {
        text-decoration: none;
        color: unset;
      }

      @media (max-width: ${theme.breakPoints.mobileL}) {
        margin-top: ${theme.spacings.xxsmall};
      }
    }
  `}
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: ${theme.spacings.xxsmall};
    width: 100%;

    @media (max-width: ${theme.breakPoints.mobileL}) {
      width: auto;
      justify-content: center;
    }
  `}
`

export const IconWrapper = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.orange};
    border-radius: 50%;
    margin: ${theme.spacings.xxsmall};

    svg {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    .copywrite-container {
      margin: auto;
      margin-top: ${theme.spacings.small};
      align-self: center;
      width: 100%;
      text-align: center;
      color: ${theme.colors.black};
    }

    header {
      display: flex;
      align-items: center;
      margin-top: ${theme.spacings.medium};

      br {
        display: none;
      }

      h2 {
        margin-left: ${theme.spacings.small};
        color: ${theme.colors.cyan};
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.semiBold};
        font-family: ${theme.font.family.ubuntu};
      }
    }
    p {
      margin-top: ${theme.spacings.medium};
      font-family: ${theme.font.family.ubuntu};
      font-weight: ${theme.font.semiBold};
      font-style: normal;
      color: ${theme.colors.black};
      line-height: ${theme.spacings.small};
    }

    a,
    h3 {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.orange};
      font-family: ${theme.font.family.ubuntu};
    }

    h3 {
      font-size: ${theme.font.sizes.large};
      margin: ${theme.spacings.small} 0;
    }

    @media (max-width: ${theme.breakPoints.laptopS}) {
      header {
        flex-direction: column;
        align-items: flex-start;

        br {
          display: unset;
        }

        h2 {
          margin: 0;
          margin-top: ${theme.spacings.small};
        }
      }
    }
  `}
`
