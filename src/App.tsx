import React from "react";
import { BrowserRouter } from "react-router-dom";

import Page from "./Pages";
import "./Styles/global.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;
