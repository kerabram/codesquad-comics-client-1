import React, { useState, useEffect } from 'react' 
import booksData from '../data/books';
import { useParams, useNavigate } from "react-router-dom";


function Update() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book,setBooks] = useState ({});
  useEffect(() => {
    fetch (`https://course-project-codesquad-comics-server.onrender.com/books/${bookId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Book data:", data);
      setBooks(data);
    })
    .catch((error) => console.error("Error fetching book data:", error));
  }, [bookId]);
  const handleUpdateForm = (e) => {
    e.preventDefault();
  const body = {
  title: e.target.title.value,
  author: e.target.author.value,
  publisher: e.target.publisher.value,
  genre: e.target.genre.value,
  pages: e.target.pages.value,
  rating: e.target.rating.value,
  synopsis: e.target.synopsis.value
};

  fetch(`https://course-project-codesquad-comics-server.onrender.com/books/${bookId}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Book updated:", data);
      setBooks(data);
      navigate("/admin");
    })
    .catch((error) => console.error("Error updating book:", error));
};

  //   const foundBook = booksData.find((book) => book._id === id);
  //   setBooks(foundBook);
  //     }, [id]);
  // const handleUpdateForm = (e)=> {
  //   e.preventDefault();
  //       console.log("Update Form Submitted");
  //       console.log(e.target.title.value);
  //       console.log(e.target.publisher.value);
  //       console.log(e.target.genre.value);
  //       console.log(e.target.pages.value);
  //       console.log(e.target.rating.value);
  //       console.log(e.target.synopsis.value);
  // }
  return (
    <main className="update-container" onSubmit={handleUpdateForm}>
      <h1> UPDATE COMIC</h1>
      <form className="update-form">
        <div className="form-groups">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title" 
            defaultValue={book.title}
            required
            />
        </div>
        <div className="form-groups">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={book.author}
            required
          />
        </div>

        <div className="form-groups">
          <label htmlFor="publisher">Publisher:</label>
          <select name="publisher" id="publisher" defaultValue={book.publisher}
            required>
            <option value="BOOM! Box">BOOM! Box:</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Harry N. Abrams">Harry N. Abrams</option>
            <option value="Icon Books">Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon & Schuster"> Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="Viz Media LLC">Viz Media LLC</option>
          </select>
        </div>
        <main className="form-groups">
          <label htmlFor="genre">Genre</label>
          <input
            type="number"
            id="genre"
            name="genre"
            defaultValue={book.genre}
            required
            />
        </main>
        <div className="form-groups">
          <label htmlFor="pages">Number of pages</label>
          <input type="text" name="pages"
           id="pages" defaultValue={book.pages}
           required/>
        </div>
        <div className="form-groups">
          <label htmlFor="rating">Rating</label>
          <input type="number" id="rating" name="rating" 
          defaultValue={book.rating}
          required />
        </div>
        <div className="form-groups">
          <label htmlFor="synopsis">Synopsis</label>
          <textarea name="synopsis" id="synopsis"
          defaultValue={book.synopsis}
          required>
          </textarea>
        </div>
        <input type="submit" className="sub-button">
          Submit
        </input>
      </form>
    </main>
  );
}
export default Update;
