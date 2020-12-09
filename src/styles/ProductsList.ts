import styled, { css } from 'styled-components'

const ProductList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    gap: ${theme.spacings.small};
    margin: auto;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${theme.breakPoints.laptopS}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      gap: auto;
    }
  `}
`

export default ProductList
