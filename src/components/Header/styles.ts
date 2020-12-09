import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    .contact-container {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .social-links {
      width: 222px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .social-links a {
      color: ${theme.colors.orange};
      cursor: pointer;
      font-size: ${theme.font.sizes.xxlarge};
    }

    .whatsapp-container a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.semiBold};
    }

    .whatsapp-container a svg {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.orange};
    }

    .navigation-container {
      display: flex;
      justify-content: space-between;
      height: 70px;
      margin-bottom: 10px;
    }

    .mobile-cart {
      margin-top: 5px;
      font-size: 5.4rem;

      align-self: center;

      display: none;

      color: ${theme.colors.cyan};
    }

    .menu {
      font-size: 5.4rem;
      align-self: center;
      margin-top: 5px;

      display: none;

      color: ${theme.colors.cyan};
    }

    .logoContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .logoContainer img {
      max-height: 100%;
    }

    .linksContainer {
      display: flex;
    }

    .linksContainer ul {
      display: flex;
      list-style: none;
    }

    .linksContainer ul li {
      display: flex;
      align-items: center;
      margin-left: ${theme.spacings.large};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family};
      cursor: pointer;
    }

    .linksContainer svg {
      margin: auto;
      margin-right: 8px;
      color: ${theme.colors.cyan};
      font-size: ${theme.font.sizes.xlarge};
      font-family: ${theme.font.family};
    }

    .search-container {
      height: 50px;
      background-color: ${theme.colors.orange};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .input-container {
      width: 400px;
      display: flex;
      justify-content: space-between;
      border-radius: 50px;
      background-color: ${theme.colors.silver};
      padding: 2px 10px;
    }

    .input-container input {
      outline: 0;
      width: 90%;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
    }

    .input-container svg {
      cursor: pointer;
    }

    @media (max-width: ${theme.breakPoints.laptopS}) {
      .linksContainer ul li {
        margin-left: ${theme.spacings.medium};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .contact-container {
        display: none;
      }
      .search-subcontainer {
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .logoContainer img {
        max-width: 80%;
        margin: auto;
      }

      .linksContainer {
        display: none;
      }
      .menu {
        display: unset;
      }

      .mobile-cart {
        display: unset;
      }

      .header {
        justify-content: center;
      }

      .logoContainer {
        justify-self: center;
        margin: auto;
        align-self: center;

        justify-content: center;

        position: unset;
      }

      .search-subcontainer {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
      }

      .input-container {
        width: 85%;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      .input-container {
        width: 95%;
      }
    }
  `}
`
