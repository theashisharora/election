import "./App.css";
import GlobalStyle from "./global/global-style";
import { AppRoutes } from "./routes";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <GlobalStyle />
    </div>
  );
}

export default App;

AOS.init({ duration: 800, easing: "ease-in-sine" });
