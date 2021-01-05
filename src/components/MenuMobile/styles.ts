import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .close {
      position: absolute;
      margin: auto;
      margin-right: 0;
      margin-top: 10px;
      right: 10px;
      font-size: ${theme.font.sizes.xxxlarge};
      color: ${theme.colors.white};
    }
  `}
`

export const Top = styled.div`
  ${({ theme }) => css`
    background: rgb(215, 77, 1);
    background: linear-gradient(
      360deg,
      rgba(215, 77, 1, 1) 0%,
      rgba(255, 90, 0, 0.7959558823529411) 47%,
      rgba(215, 77, 1, 1) 100%
    );

    height: 280px;
    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: column;

    .row {
      display: flex;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 20px;
      text-decoration: none;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.semiBold};
    }
  `}
`

export const Profile = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    height: 80px;
    width: 80px;
    background-position: center;
    background-size: cover;
    background-image: url('/img/silvio.jpg');
  `}
`

export const Bottom = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: ${theme.spacings.small};

    a {
      text-decoration: none;
      color: ${theme.colors.darkGray};
      font-size: ${theme.font.sizes.xxlarge};
      display: flex;
      align-items: flex-start;
      font-weight: ${theme.font.bold};

      svg {
        color: ${theme.colors.cyan};
      }
    }
  `}
`
