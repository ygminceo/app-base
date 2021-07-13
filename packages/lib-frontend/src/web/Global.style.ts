import { createGlobalStyle } from 'styled-components';
import { HEADER_ID } from '@lib/frontend/app/components/Header/Header.constants';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

const Ionicons = require('react-native-vector-icons/Fonts/Ionicons.ttf').default;

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Ionicons';
      src: url(${Ionicons}) format('truetype');
    }

    html, body, #root {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-smoothing: antialiased;
      overflow-y: scroll;
    }

    #root {
      display: flex;
      flex-direction: column;
    }

    #${HEADER_ID} {
      position: fixed !important;
    }

    a, a:visited {
      cursor: pointer;
      text-decoration-line: none;
      color: ${CommonTheme.colors.primary.main} !important;
      transition: color ${CommonTheme.animation.duration}ms ease-in-out;
    }
    a:hover {
      color: ${CommonTheme.colors.primary.light} !important;
    }

    [aria-disabled='true'] {
      cursor: initial !important;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none v;
      margin: 0 !important!important
    }
    input:-webkit-autofill { 
      -webkit-background-clip: text;
    }
    input {
      min-width: 0 !important;
      border: none !important;
      outline: inherit !important;
      cursor: inherit !important;
    }

    ::-webkit-scrollbar * {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${CommonTheme.colors.primary.dark}
      border-radius: 16px;
      border: 4px solid transparent;
    }

    ::-webkit-scrollbar-button {
      display: none;
    }
`;
