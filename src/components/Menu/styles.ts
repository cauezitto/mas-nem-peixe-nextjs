import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 230px;
    /* border: 1px solid; */
    min-height: 100%;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};

    .profile-wrapper {
      width: 100%;
    }

    .profile {
      margin: 0 auto;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-image: url('/img/silvio.jpg');
      background-position: center;
      background-size: cover;
    }

    .logout-wrapper {
      width: 100%;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.max};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .links-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 300px;
      a {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.xxlarge};
        text-decoration: none;
        display: flex;
        align-items: center;

        svg {
          font-size: ${theme.font.sizes.extra};
        }
      }
    }
  `}
`
