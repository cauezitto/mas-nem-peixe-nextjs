import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacings.small} 0;

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  `}
`

export const MobileAside = styled.aside`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.xlarge};
    width: 100%;

    .price-and-installments {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      margin-bottom: ${theme.spacings.small};
    }
    .price {
      color: ${theme.colors.orange};
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family.ubuntu};
      font-size: ${theme.font.sizes.extra};
      margin-bottom: ${theme.spacings.xxsmall};
    }
    .installments {
      color: ${theme.colors.gray};
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family.ubuntu};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    .info {
      text-decoration: underline;
      font-weight: ${theme.font.semiBold};
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xlarge};
    }

    .quant-selector-wrapper {
      border: 2px ${theme.colors.gray} solid;
      border-radius: ${theme.border.radius.small};
      height: 60px;
      display: flex;
      width: 60%;
      justify-content: space-around;
      align-content: center;
      margin: ${theme.spacings.small} 0;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-justify: center;
        margin-bottom: 5px;
        font-size: ${theme.font.sizes.xxlarge};
      }

      button {
        border: 0;
        padding: 0;
        margin: 0;
        outline: 0;
        align-items: center;
        justify-content: center;
        font-size: ${theme.font.sizes.extra};
        color: ${theme.colors.darkGray};
        cursor: pointer;

        svg {
          margin: auto;
        }
      }
    }

    .buy-or-favorite {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin: ${theme.spacings.small} 0;

      span {
        margin: ${theme.spacings.small} 0;
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.xlarge};
      }
    }

    .shipping-wrapper {
      width: 100%;
      table {
        border: 1px ${theme.colors.gray} solid;
        border-collapse: collapse;
        width: 100%;
        margin-top: ${theme.spacings.small};
        font-family: ${theme.font.family.ubuntu};
      }

      th {
        font-weight: ${theme.font.semiBold};
        font-family: ${theme.font.family.ubuntu};
      }

      th,
      td,
      tr {
        border-bottom: 1px ${theme.colors.gray} solid;
        text-align: center;
        padding: 15px 0;
        font-family: ${theme.font.family.ubuntu};
      }

      .hidden {
        visibility: hidden;
      }

      h3 {
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.bold};
        margin-bottom: ${theme.spacings.small};
      }

      .cep-input-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;

        button {
          height: 100%;
          border: 0;
          background-color: ${theme.colors.orange};
          color: ${theme.colors.white};
          border-radius: ${theme.border.radius.medium};
          font-size: ${theme.font.sizes.xlarge};
          width: 80px;
          cursor: pointer;
        }

        input {
          border: 2px ${theme.colors.gray} solid;
          border-radius: ${theme.border.radius.medium};
          outline: 0;
          font-size: ${theme.font.sizes.large};
          width: 250px;
        }
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: flex;
    }
  `}
`

export const ProductAside = styled.aside`
  ${({ theme }) => css`
    width: 350px;
    display: flex;
    flex-direction: column;
    font-family: ${theme.font.family.ubuntu};

    h1 {
      font-family: ${theme.font.family.manjari};
      font-size: ${theme.font.sizes.xxlarge};
    }

    b {
      font-weight: ${theme.font.semiBold};
    }

    .favorite {
      border: 0;
      display: flex;
      align-items: center;
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.medium};
      margin: ${theme.spacings.small} 0;

      svg {
        color: ${theme.colors.cyan};
        font-size: ${theme.font.sizes.xlarge};
      }
    }
    .price-and-installments {
      display: flex;
      flex-direction: column;
    }
    .price {
      color: ${theme.colors.orange};
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.xxxlarge};
      margin-bottom: ${theme.spacings.xxsmall};
    }
    .installments {
      color: ${theme.colors.darkGray};
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    .info {
      text-decoration: underline;
      font-weight: ${theme.font.semiBold};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    .quant-selector-wrapper {
      border: 1px ${theme.colors.gray} solid;
      border-radius: ${theme.border.radius.small};
      height: 50px;
      display: flex;
      width: 130px;
      justify-content: space-around;
      align-content: center;
      margin: ${theme.spacings.small} 0;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-justify: center;
        margin-bottom: 5px;
        font-size: ${theme.font.sizes.xlarge};
      }

      button {
        border: 0;
        padding: 0;
        margin: 0;
        outline: 0;
        align-items: center;
        justify-content: center;
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.darkGray};
        cursor: pointer;

        svg {
          margin: auto;
        }
      }
    }

    .buy-or-favorite {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin-bottom: ${theme.spacings.xxlarge};

      span {
        margin: ${theme.spacings.xxsmall} 0;
      }
    }

    .shipping-wrapper {
      table {
        border: 1px ${theme.colors.gray} solid;
        border-collapse: collapse;
        width: 100%;
        margin-top: ${theme.spacings.small};
        font-family: ${theme.font.family.ubuntu};
      }

      th {
        font-weight: ${theme.font.semiBold};
        font-family: ${theme.font.family.ubuntu};
      }

      th,
      td,
      tr {
        border-bottom: 1px ${theme.colors.gray} solid;
        text-align: center;
        padding: 15px 0;
        font-family: ${theme.font.family.ubuntu};
      }

      .hidden {
        visibility: hidden;
      }

      h3 {
        font-weight: ${theme.font.semiBold};
        margin-bottom: ${theme.spacings.xxsmall};
      }

      .cep-input-wrapper {
        display: flex;
        justify-content: space-between;
        width: 230px;
        border: 1px ${theme.colors.gray} solid;
        border-radius: ${theme.border.radius.medium};
        height: 40px;

        button {
          height: 100%;
          border: 0;
          background-color: ${theme.colors.orange};
          color: ${theme.colors.white};
          border-radius: 0 ${theme.border.radius.medium}
            ${theme.border.radius.medium} 0;
          width: 50px;
          cursor: pointer;
        }

        input {
          outline: 0;
          font-size: ${theme.font.sizes.large};
          width: 100%;
        }
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 100%;
      .desktop {
        display: none;
      }

      .header-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  `}
`

export const ProductImageWrapper = styled.div`
  ${({ theme }) => css`
    .share-wrapper {
      margin-left: ${theme.spacings.small};
      span {
        color: ${theme.colors.black};
        font-family: ${theme.font.family.ubuntu};
      }

      .options {
        display: flex;
        width: 400px;
        justify-content: space-between;
        margin-top: ${theme.spacings.small};

        .facebook {
          background-color: #3b5998;
        }
        .twitter {
          background-color: #1da1f2;
        }
        .whatsapp {
          background-color: #4dc247;
        }
        .plus {
          background-color: #ff6550;
        }
      }

      .option {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        white-space: nowrap;
        color: ${theme.colors.white};
      }
      a {
        text-decoration: none;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .share-wrapper {
        width: 100%;
        margin: 0;
      }
    }
  `}
`

export const CarouselImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 330px;

    div {
      outline: 0;
    }

    img {
      outline: 0;
    }

    .paging-item {
      display: none;
    }

    span {
      color: ${theme.colors.cyan};
      font-weight: ${theme.font.semiBold};
    }

    .selectors-circles {
      button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: none;
        border: 3px ${theme.colors.cyan} solid;
        margin: 1px;
        outline: 0;
        cursor: pointer;
      }

      .selected {
        background-color: ${theme.colors.cyan};
      }
    }

    .preview-images {
      display: flex;
      margin: ${theme.spacings.small} 0;
      .selected,
      .not-selected {
        border-radius: ${theme.border.radius.medium};
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .selected {
        border: 1px ${theme.colors.orange} solid;
      }

      .not-selected {
        border: 1px solid ${theme.colors.silver};
      }

      img {
        cursor: pointer;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      margin: auto;
    }
  `}
`
