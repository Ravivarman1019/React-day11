import React, { useEffect, useState } from 'react';
import { fetchBooks, deleteBook } from '../services/api';

const BookList = ({ onEdit }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then((response) => setBooks(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteBook(id).then(() => setBooks(books.filter(book => book.id !== id)));
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
