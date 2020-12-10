import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacings.small} 0;
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
  `}
`

export const ProductImageWrapper = styled.div``

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
  `}
`
