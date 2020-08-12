import React, { useState, useEffect } from "react";

import "./index.css";

import Library from "../../storage/Library";

function Modal(props) {
  const {
    showModal,
    toggleModal,
    setBookLibrary,
    bookToEdit,
    setBookToEdit,
  } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [readStatus, setReadStatus] = useState(false);

  const hide = showModal ? "" : "hide";

  useEffect(() => {
    setTitle(bookToEdit.title);
    setAuthor(bookToEdit.author);
    setPages(bookToEdit.pages);
    setReadStatus(bookToEdit.isRead);
  }, [bookToEdit]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bookToEdit.id) {
      Library.addBook(title, author, pages, readStatus);
    } else {
      Library.editBook({
        title,
        author,
        pages,
        isRead: readStatus,
        id: bookToEdit.id,
      });
    }

    setBookLibrary(Library.getAllBooks());

    clearModal();
    toggleModal();
  }

  function clearModal() {
    setBookToEdit({
      title: "",
      author: "",
      pages: "",
      isRead: false,
    });
  }

  return (
    <div id="modal" className={hide}>
      <div className="content">
        <div className="header">
          <h1>{bookToEdit.id ? "Edit book" : "Add a book"}</h1>
          <button
            id="btn-modal-close"
            onClick={() => {
              clearModal();
              toggleModal();
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
            {bookToEdit.id ? "Edit book" : "Add book"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
