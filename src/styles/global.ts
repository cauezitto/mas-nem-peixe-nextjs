import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* ubuntu-condensed-regular - latin */
@font-face {
  font-family: 'Ubuntu Condensed';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/ubuntu-condensed-v11-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/ubuntu-condensed-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/ubuntu-condensed-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/ubuntu-condensed-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/ubuntu-condensed-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/ubuntu-condensed-v11-latin-regular.svg#UbuntuCondensed') format('svg'); /* Legacy iOS */
  }

  /* ubuntu-regular - latin */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/ubuntu-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/ubuntu-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/ubuntu-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/ubuntu-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/ubuntu-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/ubuntu-v15-latin-regular.svg#Ubuntu') format('svg'); /* Legacy iOS */
}
/* ubuntu-500 - latin */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/ubuntu-v15-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/ubuntu-v15-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/ubuntu-v15-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/ubuntu-v15-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/ubuntu-v15-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/ubuntu-v15-latin-500.svg#Ubuntu') format('svg'); /* Legacy iOS */
}

  /* manjari-regular - latin */
@font-face {
  font-family: 'Manjari';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/manjari-v3-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/manjari-v3-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/manjari-v3-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/manjari-v3-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/manjari-v3-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/manjari-v3-latin-regular.svg#Manjari') format('svg'); /* Legacy iOS */
}
/* manjari-700 - latin */
@font-face {
  font-family: 'Manjari';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/manjari-v3-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/manjari-v3-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/manjari-v3-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/manjari-v3-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/manjari-v3-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/manjari-v3-latin-700.svg#Manjari') format('svg'); /* Legacy iOS */
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-animation: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    button {
      background: none;
    }

    body {
      font-family: ${theme.font.family.ubuntuCondensed};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.silver};
    }

    input {
      border: 0;
      text-indent: 10px;
      background: none;
    }

    @media (max-width: 1024px) {
      html {
        font-size: 60%;
      }
    }

    @media (max-width: 768px) {
      html {
        font-size: 58%;
      }
    }
  `}
`

export default GlobalStyles
