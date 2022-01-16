import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./ui";
import {store} from './store/applicationStore';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
