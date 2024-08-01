import React, { useEffect, useState } from 'react';
import { fetchAuthors, deleteAuthor } from '../services/abi.js';

const AuthorList = ({ onEdit }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors().then((response) => setAuthors(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteAuthor(id).then(() => setAuthors(authors.filter(author => author.id !== id)));
  };

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name}
            <button onClick={() => onEdit(author)}>Edit</button>
            <button onClick={() => handleDelete(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
