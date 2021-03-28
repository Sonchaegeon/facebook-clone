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
    color: #1c1e21;
    line-height: 1.34;
    font-size: 12px;
  }

  form {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  input {
    cursor: text;
  }
`;

export default GlobalStyle;
