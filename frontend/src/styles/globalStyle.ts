import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    background-color: #eff2f5;
  }
`;

export default GlobalStyle;
