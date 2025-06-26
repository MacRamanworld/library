import React, { useState, useEffect } from 'react';

export default function Library() {
  const [books, setBooks] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('http://192.168.190.1:3000/api/books');
    const json = await response.json();
    setBooks(json);
  };
  fetchData();
}, []);

  return (
    <div>
      <h1>Library</h1>
      <ul>
        {books.map((book,index) => (
          <li key={index}>
            <div>{book.name}</div>
            <div>{book.year_published}</div>
            <div>{book.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}