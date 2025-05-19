const { generateId, getTimestamp } = require('../utils');

const books = [];

const addBook = (bookData) => {
  const id = generateId();
  const insertedAt = getTimestamp();
  const updatedAt = insertedAt;
  const finished = bookData.pageCount === bookData.readPage;

  const newBook = {
    id,
    ...bookData,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);
  return id;
};

const getAllBooks = () =>
  books.map(({ id, name, publisher }) => ({ id, name, publisher }));

const getBookById = (id) => books.find((b) => b.id === id);

const updateBook = (id, bookData) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;

  const updatedAt = getTimestamp();
  const finished = bookData.pageCount === bookData.readPage;

  books[index] = {
    ...books[index],
    ...bookData,
    finished,
    updatedAt,
  };
  return true;
};

const deleteBook = (id) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};

const getBooksRaw = () => books;

module.exports = {
  addBook,
  getAllBooks,  
  getBooksRaw,   
  getBookById,
  updateBook,
  deleteBook,
};