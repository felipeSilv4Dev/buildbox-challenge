import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import { deafultTheme } from "./theme/defaultTheme";
import { GlobalContainer } from "./styles/Global.styled.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={deafultTheme}>
      <GlobalContainer />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
