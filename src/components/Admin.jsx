import React, { useState, useEffect } from 'react' 
import booksData from "../data/books";

function Admin() {
  const [books,setBooks] = useState ([]);
  useEffect(() => {
      setBooks(booksData);
      fetch("https://course-project-codesquad-comics-server.onrender.com/api/books")
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => 
            console.error("error", error));
  }, []);


    const handleDeleteComic = (bookId) => {
      fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => console.log("Comic deleted:", data))
        .catch((error) => console.error("Error deleting comic:", error))
    }; [];

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
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>
                    <Link className="edit-btn" to={`/update/${book.id}`}>UPDATE</Link>
                  </td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteComic(book.id)} >DELETE</button>
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

