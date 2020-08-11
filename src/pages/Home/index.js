import React from "react";

import "../../assets/fonts/fonts.css";
import "../../assets/styles/reset.css";
import "../../assets/styles/global.css";
import "./index.css";

import Header from "../../components/Header";
import Toolbar from "../../components/Toolbar";
import Card from "../../components/Card";

function Home() {
  const bookObj = {
    title: "Budapeste",
    author: "Chico Buarque de Holanda",
    pages: 174,
  };

  return (
    <div id="page-home">
      <div className="container" id="page-home-content">
        <Header />

        <main>
          <Toolbar />

          <div className="cards-container">
            <Card bookObj={bookObj} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
