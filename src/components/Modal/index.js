import React, { useState } from "react";

import "./index.css";

import Library from "../../storage/Library";

function Modal(props) {
  const { showModal, closeModal, setBookLibrary } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [readStatus, setReadStatus] = useState(false);

  const hide = showModal ? "" : "hide";

  function handleSubmit(e) {
    e.preventDefault();

    Library.addBook(title, author, pages, readStatus);
    setBookLibrary(Library.getAllBooks());

    clearModal();
    closeModal();
  }

  function clearModal() {
    setTitle("");
    setAuthor("");
    setPages("");
    setReadStatus(false);
  }

  return (
    <div id="modal" className={hide}>
      <div className="content">
        <div className="header">
          <h1>Add a book</h1>
          <button
            id="btn-modal-close"
            onClick={() => {
              clearModal();
              closeModal();
            }}
          >
            Close
          </button>
        </div>

        <form className="body" onSubmit={handleSubmit}>
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            name="title"
            required="required"
          />

          <label htmlFor="author">Author *</label>
          <input
            id="book-author"
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required="required"
          />

          <div className="lower">
            <label className="label-pages" htmlFor="pages">
              # of pages
            </label>
            <input
              id="book-pages"
              className="input-pages"
              type="number"
              name="pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />

            <label className="label-read" htmlFor="read">
              Already read?
            </label>
            <input
              className="input-read"
              id="book-read"
              type="checkbox"
              name="read"
              checked={readStatus}
              onChange={(e) => setReadStatus(e.target.checked)}
            />
          </div>

          <button id="btn-modal-add" type="submit">
            Add book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
