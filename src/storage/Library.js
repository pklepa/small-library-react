// ..:: Constructors
// Book Constructor available only here
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Library module - available across the whole project wherever it is imported
const Library = (() => {
  let bookshelf = [];
  let bookIdEnum = 0;

  function getAllBooks() {
    return bookshelf;
  }

  function addBook(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    newBook.id = "ID" + ++bookIdEnum;

    bookshelf.push(newBook);
  }

  function deleteBook(id) {
    const updatedBookshelf = bookshelf.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });

    bookshelf = updatedBookshelf;
  }

  function editBook(updatedBook) {
    const updatedBookshelf = bookshelf.map((book) => {
      if (book.id === updatedBook.id) {
        const { title, author, pages, isRead } = updatedBook;
        book.title = title;
        book.author = author;
        book.pages = pages;
        book.isRead = isRead;
      }

      return book;
    });

    bookshelf = updatedBookshelf;
  }

  function changeBookReadStatus(id) {
    const updatedBookshelf = bookshelf.map((book) => {
      if (book.id === id) {
        book.isRead = !book.isRead;
      }

      return book;
    });

    bookshelf = updatedBookshelf;
  }

  function initializeLibrary() {
    if (!localStorage.getItem("@small-lib-react/book1")) {
      addBook("Budapeste", "Chico Buarque de Holanda", 174, true);
      addBook("Estorvo", "Chico Buarque de Holanda", 203, false);
      addBook("Pale Blue Dot", "Carl Sagan", 421, true);
    } else {
      for (let i = 1; i <= localStorage.length; i++) {
        let bookArr = JSON.parse(
          localStorage.getItem(`@small-lib-react/book${i}`)
        );
        addBook(bookArr[0], bookArr[1], bookArr[2], bookArr[3]);
      }
    }
  }

  function saveLibrary() {
    localStorage.clear();

    let i = 1;
    bookshelf.forEach((book) => {
      localStorage.setItem(
        `@small-lib-react/book${i}`,
        JSON.stringify(Object.values(book))
      );
      i++;
    });
  }

  return {
    initializeLibrary,
    saveLibrary,
    getAllBooks,
    addBook,
    deleteBook,
    editBook,
    changeBookReadStatus,
  };
})();

export default Library;
