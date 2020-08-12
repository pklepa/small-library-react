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

  function changeBookReadStatus(id) {
    bookshelf.map((book) => {
      if (book.id === id) {
        return { ...book, id: !book.id };
      }

      return book;
    });
  }

  return { getAllBooks, addBook, deleteBook, changeBookReadStatus };
})();

export default Library;
