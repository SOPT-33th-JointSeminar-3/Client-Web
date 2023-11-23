import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import React from "react";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PaymentPage />
      </ThemeProvider>
    </>
  );
}

export default App;
