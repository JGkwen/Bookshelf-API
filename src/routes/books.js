const handlers = require('../handlers/booksHandler');

module.exports = [
  {
    method: 'POST',
    path: '/books',
    handler: handlers.addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handlers.getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: handlers.getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: handlers.updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: handlers.deleteBookHandler,
  },
];
