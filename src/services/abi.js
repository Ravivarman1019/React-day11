import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust based on your backend setup

export const fetchBooks = () => axios.get(`${API_URL}/books`);
export const fetchAuthors = () => axios.get(`${API_URL}/authors`);
export const addBook = (book) => axios.post(`${API_URL}/books`, book);
export const updateBook = (id, book) => axios.put(`${API_URL}/books/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_URL}/books/${id}`);
export const addAuthor = (author) => axios.post(`${API_URL}/authors`, author);
export const updateAuthor = (id, author) => axios.put(`${API_URL}/authors/${id}`, author);
export const deleteAuthor = (id) => axios.delete(`${API_URL}/authors/${id}`);
