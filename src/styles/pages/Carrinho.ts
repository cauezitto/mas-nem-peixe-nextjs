import styled, { css } from 'styled-components'

export const Legend = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.xlarge};
    margin: -${theme.spacings.large} auto;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
  `}
`

export const GridContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'list list list'
      'shipping shipping resume'
      'cupom cupom cupom'
      '. buttons buttons';
    gap: ${theme.spacings.medium} ${theme.spacings.xsmall};
    width: 100%;
    margin-bottom: ${theme.spacings.large};
    margin-top: ${theme.spacings.large};

    .table {
      grid-area: list;
    }

    .mobile-table {
      grid-area: list;
      display: none;
    }

    .resume {
      grid-area: resume;
      font-size: ${theme.font.sizes.large};

      li {
        margin-bottom: 5px;
      }
    }

    .cupom {
      grid-area: cupom;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      grid-area: buttons;
      /* border: 1px solid; */
    }

    .shipping {
      grid-area: shipping;

      .wrapper {
        padding: 10px;
      }

      .table {
        display: table;
        /* border-collapse: inherit; */
        width: 100%;
        margin-top: ${theme.spacings.small};
        border: 1px ${theme.colors.gray} solid;
        border-radius: ${theme.border.radius.small};
        padding: ${theme.spacings.xxsmall};
      }

      .head {
        font-weight: ${theme.font.semiBold};
        font-size: ${theme.font.sizes.xlarge};
      }

      .row {
        display: table-row;
        border-bottom: 2px solid ${theme.colors.gray};
        :last-child {
          .item {
            border: 0;
          }
        }
      }

      .cell {
        font-size: ${theme.font.sizes.large};
      }
      .underline {
        border-bottom: 1px solid ${theme.colors.gray};
      }
      .item {
        display: table-cell;
        padding: ${theme.spacings.xsmall} 0;
      }

      .unset-option {
        background: none;
        width: 26px;
        height: 26px;
        border: 2px solid ${theme.colors.gray};
        border-radius: ${theme.border.radius.rounded};
        cursor: pointer;
        outline: 0;
      }

      svg {
        font-size: 28px;
        width: 25px;
        height: 25px;
        color: ${theme.colors.green};
        margin: 0;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: flex;
      flex-direction: column;

      .table {
        display: none;
      }

      .mobile-table {
        display: unset;
        width: 100%;

        h3,
        b {
          font-weight: ${theme.font.semiBold};
          margin: ${theme.spacings.xsmall} 0;
        }

        h3 {
          font-size: ${theme.font.sizes.xlarge};
        }
      }

      .space-between-variable {
        flex-direction: column;
        justify-content: space-between;
      }
      .total-title {
        visibility: hidden;
      }

      .cep-input-wrapper {
        justify-content: space-around;

        input {
          width: 70%;
        }
      }

      .cupom {
        .variable {
          flex-direction: column;
          text-align: flex-start;
        }
      }
    }
  `}
`
