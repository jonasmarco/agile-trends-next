import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'Barlow Condensed';
    font-style:normal;
    font-weight:300;
    font-display:swap;
    src:local(''),
        url('../fonts/barlow-condensed-v5-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family:'Barlow Condensed';
    font-style:normal;
    font-weight:400;
    font-display:swap;
    src:local(''),
        url('../fonts/barlow-condensed-v5-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family:'Barlow Condensed';
    font-style:normal;
    font-weight:700;
    font-display:swap;
    src:local(''),
        url('../fonts/barlow-condensed-v5-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family:'Poppins';
    font-style:normal;
    font-weight:300;
    font-display:swap;
    src:local(''),
        url('../fonts/poppins-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family:'Poppins';
    font-style:normal;
    font-weight:400;
    font-display:swap;
    src:local(''),
        url('../fonts/poppins-v15-latin-regular.woff2') format('woff2');
  }

  * {
    box-sizing:border-box;
    margin:0;
    padding:0;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    #body,
    #__next {
      background-color: ${theme.colors.mainBg};
    }

    a {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
      text-decoration: none;
    }

    ::moz-selection {
      background: ${theme.colors.primary};
    }

    ::selection {
      background: ${theme.colors.primary};
    }
  `}
`

export default GlobalStyles
