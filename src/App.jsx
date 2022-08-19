import "./App.css";
import GlobalStyle from "./global/global-style";
import { AppRoutes } from "./routes";
import React from "react";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <GlobalStyle />
    </div>
  );
}

export default App;
