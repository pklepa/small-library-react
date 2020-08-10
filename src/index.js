import React from "react";
import ReactDOM from "react-dom";

import "./assets/fonts/fonts.css";
import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import "./index.css";

import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <div id="page-home">
      <div className="container" id="page-home-content">
        <Header />

        <main>
          <Toolbar />

          <CardsContainer />
        </main>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
