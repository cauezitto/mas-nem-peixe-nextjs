import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { TableProps, TrProps, ThProps } from '.'

const tableTheme = css`
  ${({ theme }) => css`
    font-family: ${theme.font.family.ubuntu};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `}
`

const trModifier = {
  block: css`
    ${({ theme }) => css`
      width: 100%;
    `}
  `
}

const areaModifier = {
  textAlign: (align: string) => css`
    ${({ theme }) => css`
      ${align === 'center' &&
      css`
        text-align: ${align};
        justify-content: center;
        p,
        h1,
        h2,
        h3,
        span,
        strong {
          justify-content: center;
        }
      `}

      ${align === 'justify' &&
      css`
        text-align: ${align};
        justify-content: space-between;
      `}
    `}
  `,
  spaced: css`
    ${({ theme }) => css`
      margin-bottom: ${theme.spacings.xxsmall};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 4px 4px rgba(0, 0, 0, 0.25);
      /* border: 1px solid; */
    `}
  `
}

export const TableWrapper = styled.table<TableProps>`
  ${({ theme, size = 'block', top = 'small' }) => css`
    ${trModifier[size]}
    border-collapse: collapse;
    margin-top: ${theme.spacings[top]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`
export const TrWrapper = styled.tr<TrProps>`
  ${({ theme, size = 'block', spaced = false }) => css`
    ${trModifier[size]}
    ${spaced && areaModifier.spaced}
    border-radius: ${theme.border.radius.medium};
    background: ${theme.colors.white};
    ${tableTheme}
  `}
`
export const ThWrapper = styled.th<ThProps>`
  ${({ theme, weight = 'normal', align = 'justify' }) => css`
    ${tableTheme}
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font[weight!]};
    ${areaModifier.textAlign(align)}
  `}
`
export const TdWrapper = styled.td`
  ${({ theme, align = 'justify' }) => css`
    ${tableTheme}
    ${areaModifier.textAlign(align)}

    .sub-wrapper {
      display: flex;
      align-items: center;
      font-family: ${theme.font.family.manjari};
    }

    .product-info {
      display: flex;
      flex-direction: column;

      h3 {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`
