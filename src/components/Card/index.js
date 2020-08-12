import React from "react";

import "./index.css";

import Library from "../../storage/Library";

function Card({ bookObj, setBookLibrary, setBookToEdit, toggleModal }) {
  const { title, author, pages, isRead, id } = bookObj;

  function handleChange() {
    Library.changeBookReadStatus(id);

    setBookLibrary(Library.getAllBooks());
  }

  function handleDelete() {
    Library.deleteBook(id);

    setBookLibrary(Library.getAllBooks());
  }

  function handleEdit() {
    setBookToEdit(bookObj);

    toggleModal();
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <div className="card-footer">
        <div className="buttons">
          <button onClick={handleDelete}>delete</button>
          <button onClick={handleEdit}>edit</button>
        </div>
        {pages ? <h4>{pages} pages</h4> : <p></p>}
        <div className="checkbox-container">
          <div className="checkbox">
            <label htmlFor="read-checkbox">read</label>
            <input
              id="test"
              type="checkbox"
              name="read-checkbox"
              checked={isRead}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
