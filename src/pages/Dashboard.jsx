import React, { useState } from 'react';
import BookForm from '../Component/BookForm';
import AuthorForm from '../Component/AuthorForm';
import BookList from '../Component/BookLIst';
import AuthorList from '../Component/AuthorList';
import { addBook, updateBook, addAuthor, updateAuthor } from '../services/api';

const Dashboard = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleBookSubmit = (book) => {
    if (selectedBook) {
      updateBook(selectedBook.id, book).then(() => setSelectedBook(null));
    } else {
      addBook(book);
    }
  };

  const handleAuthorSubmit = (author) => {
    if (selectedAuthor) {
      updateAuthor(selectedAuthor.id, author).then(() => setSelectedAuthor(null));
    } else {
      addAuthor(author);
    }
  };

  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <div>
        <h2>Manage Books</h2>
        <BookForm initialValues={selectedBook || { title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleBookSubmit} />
        <BookList onEdit={setSelectedBook} />
      </div>
      <div>
        <h2>Manage Authors</h2>
        <AuthorForm initialValues={selectedAuthor || { name: '', birthDate: '', biography: '' }} onSubmit={handleAuthorSubmit} />
        <AuthorList onEdit={setSelectedAuthor} />
      </div>
    </div>
  );
};

export default Dashboard;
