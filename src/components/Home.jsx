import booksData from '../data/books';

function Home() {
    return (
        <main>
            <h2>Books In Stock</h2>
            <div className="book-listings">
                {booksData.map((book) => (
                    <div className="book-listing" key={book.id}>
                      <img src= {`/public/images/${book.cover}`} alt={book.title} />
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
