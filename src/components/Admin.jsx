import React, { useState, useEffect } from 'react' 
import booksData from "../data/books";

function Admin() {
  const [books,setBooks] = useState ([]);
  useEffect(() => {
      setBooks(booksData)
      }, []);


  return (
    <main>
      <div className="admin-container">
        <h1>ADMIN PAGE</h1>
        <button className="btn-admin">ADD NEW COMIC</button>
        <div className="admin-table">
          <table>
            <thead>
              <tr>
                <th>COMIC TITLE</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>
                    <button className="edit-btn">EDIT</button>
                  </td>
                  <td>
                    <button className="delete-btn">DELETE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Admin;

