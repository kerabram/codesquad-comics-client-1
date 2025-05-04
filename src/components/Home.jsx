import React, { useState, useEffect } from 'react' 
import booksData from '../data/books';


function Home() {
    const [books,setBooks] = useState ([]);
    useEffect(() => {
        setBooks(booksData)
        }, []);

    return (
        <main>
            <h2>Books In Stock</h2>
            <div className="book-listings">
                {books.map((book) => (
                    <div className="book-listing" key={book.id}>
                      <img src= {`/images/${book.imageUrl}`} alt={book.title}/>
                      {/* {`../../public/images/${book.image}`} -Kit- you were very close. We don't reference the public directory in image paths. You referenced cover, where we need to target the image in books.js, which corresponds with the key there  */}
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
