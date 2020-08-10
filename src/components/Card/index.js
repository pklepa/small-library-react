import React from "react";

import "./index.css";

function Card(props) {
  return (
    <div className="card newCard" id={`book${props.bookObj.id}`}>
      <h2>{props.bookObj.title}</h2>
      <h3>{props.bookObj.author}</h3>
      <h4>{props.bookObj.pages} pages</h4>
      <div className="checkbox">
        <label htmlFor="read-checkbox">read</label>
        <input id="test" type="checkbox" name="read-checkbox" />
      </div>
      <button className="btn-remove">delete</button>
    </div>
  );
}

export default Card;
