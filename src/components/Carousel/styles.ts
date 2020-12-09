import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  align-items: center;
  margin: auto;
  padding: 0;

  .mobile {
    display: none;
  }

  @media (max-width: 450px) {
    .mobile {
      display: unset;
    }
    .desktop {
      display: none;
    }
  }
`
