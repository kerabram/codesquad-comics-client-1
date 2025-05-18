import React, { useState, useEffect } from 'react' 
import booksData from '../data/books';


function Home() {
    const [books,setBooks] = useState ([]);
    useEffect(() => {
        setBooks(booksData);
        fetch("https://course-project-codesquad-comics-server.onrender.com/api/books")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => 
                console.error("error", error));
    }, []);


    return (
        <main>
            <h2>Books In Stock</h2>
            <div className="book-listings">
                {books.map((book) => (
                    <div className="book-listing" key={book.id}>
                      <img src= {`/images/${book.imageUrl}`} alt={book.title}/>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <a href="#">View Details</a>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Home;
