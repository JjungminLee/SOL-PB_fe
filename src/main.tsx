import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #eaeaea; 
    display: flex;
    justify-content: center;
  }

  #root {
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
