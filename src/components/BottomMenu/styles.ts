import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.silver};
    border-radius: ${theme.border.radius.rounded} ${theme.border.radius.rounded}
      0 0;
    .sub-wrapper {
      height: 60px;
      background: rgb(215, 77, 1);
      background: linear-gradient(
        360deg,
        rgba(215, 77, 1, 1) 0%,
        rgba(255, 90, 0, 0.7959558823529411) 47%,
        rgba(215, 77, 1, 1) 100%
      );
      border-radius: ${theme.border.radius.rounded}
        ${theme.border.radius.rounded} 0 0;
      display: flex;
      padding: ${theme.spacings.xxsmall} 10%;
      align-items: center;
      justify-content: space-between;
    }

    a {
      color: ${theme.colors.white};
    }

    a,
    button {
      text-decoration: none;
      /* color: ${theme.colors.white}; */
      font-size: ${theme.font.sizes.extra};
    }

    button {
      border: 0;
      outline: 0;
      background-color: ${theme.colors.white};
      color: ${theme.colors.orange};
      border-radius: 50%;
      height: 80px;
      width: 80px;
      margin-bottom: -20px;
    }
  `}
`
