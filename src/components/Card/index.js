import React from "react";

import "./index.css";

import Library from "../../storage/Library";

function Card({ bookObj, setBookLibrary }) {
  const { title, author, pages, isRead, id } = bookObj;

  function handleChange() {
    Library.changeBookReadStatus(id);

    setBookLibrary(Library.getAllBooks());
  }

  function handleDelete() {
    Library.deleteBook(id);

    setBookLibrary(Library.getAllBooks());
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{author}</h3>
      {pages && <h4>{pages} pages</h4>}
      <div className="checkbox">
        <label htmlFor="read-checkbox">read</label>
        <input
          id="test"
          type="checkbox"
          name="read-checkbox"
          defaultChecked={isRead}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleDelete} className="btn-remove">
        delete
      </button>
    </div>
  );
}

export default Card;
