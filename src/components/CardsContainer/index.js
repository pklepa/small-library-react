import React from "react";

import "./index.css";

import Card from "../Card";

function CardsContainer() {
  const bookObj = {
    title: "Budapeste",
    author: "Chico Buarque de Holanda",
    pages: 174,
  };

  return (
    <div className="cards-container">
      <Card bookObj={bookObj} />
    </div>
  );
}

export default CardsContainer;
