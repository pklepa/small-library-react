import React, { useState, useEffect } from "react";

import "../../assets/fonts/fonts.css";
import "../../assets/styles/reset.css";
import "../../assets/styles/global.css";
import "./index.css";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Library from "../../storage/Library";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [bookLibrary, setBookLibrary] = useState([]);
  const [bookToEdit, setBookToEdit] = useState({});

  function toggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    Library.addBook("Budapeste", "Chico Buarque de Holanda", 174, true);
    Library.addBook("Estorvo", "Chico Buarque de Holanda", 203, false);
    Library.addBook("Pale Blue Dot", "Carl Sagan", 421, true);

    setBookLibrary(Library.getAllBooks());
  }, []);

  return (
    <div id="page-home">
      <Header />

      <main>
        <button className="add-book" id="btn-add-form" onClick={toggleModal}>
          <span>add_circle</span>Add a book
        </button>

        <div className="cards-container">
          {bookLibrary.map((book) => {
            return (
              <Card
                key={book.id}
                bookObj={book}
                setBookLibrary={setBookLibrary}
                setBookToEdit={setBookToEdit}
                toggleModal={toggleModal}
              />
            );
          })}
        </div>
      </main>

      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        setBookLibrary={setBookLibrary}
        bookToEdit={bookToEdit}
        setBookToEdit={setBookToEdit}
      />
    </div>
  );
}

export default Home;
