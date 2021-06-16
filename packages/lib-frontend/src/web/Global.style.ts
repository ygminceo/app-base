import { createGlobalStyle } from 'styled-components';
import { APP_HEADER_ID } from '@lib/frontend/app/containers/AppHeader/AppHeader.constants';
import { APP_SIDE_MENU_ID } from '@lib/frontend/app/containers/AppSideMenu/AppSideMenu.constants';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';

const Ionicons = require('react-native-vector-icons/Fonts/Ionicons.ttf').default;
const Fontawesome = require('react-native-vector-icons/Fonts/FontAwesome.ttf').default;

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Ionicons';
        src: url(${Ionicons}) format('truetype');
    }

    @font-face {
      font-family: 'FontAwesome';
      src: url(${Fontawesome}) format('truetype');
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

    #${APP_HEADER_ID}, #${APP_SIDE_MENU_ID} {
      position: fixed !important;
    }

    a, a:visited {
        cursor: pointer;
        text-decoration-line: none;
        transition: color ${CommonTheme.animation.duration}ms ease-in-out;
    }
    a:hover {
        color: ${CommonTheme.colors.primary.dark} !important;
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
        border: none !important;
        outline: inherit !important;
        cursor: inherit !important;
    }
`;
