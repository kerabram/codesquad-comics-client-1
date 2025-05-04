



function Create (){
const handleCreateForm = (e) =>{
  e.preventDefault();
console.log("Create Form Submitted");
console.log(e.target.title.value);
console.log(e.target.publisher.value);
console.log(e.target.genre.value);
console.log(e.target.pages.value);
console.log(e.target.rating.value);
console.log(e.target.synopsis.value);
}
    return (
    <main className="create-container">
      <h1>CREATE NEW COMIC</h1>
      <form className="create-form" onSubmit={handleCreateForm }>
        <div className="create-groups">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" placeholder="title" required/>
      </div>
      <div className="create-groups">
      <label htmlFor="author">Author</label>
      <input type="text" id="author" name="author" placeholder="author" required/>
      </div>
      <div className="create-groups">
      <label htmlFor="publisher">Publisher</label>
      <select name="publisher" id="publisher">
          <option value="" disabled selected >Select</option>
          <option value="">BOOM! Box</option>
          <option value="DC Comics">SDC Comics</option>
          <option value="Harry N. Abrams">Harry N. Abrams</option>
          <option value="Icon Books">Icon Books</option>
          <option value="Image Comics">Image Comics</option>
          <option value="Marvel">Marvel</option>
          <option value="Simon & Schuster"> Simon & Schuster</option>
          <option value="Top Shelf Productions">Top Shelf Productions</option>
          <option value="Viz Media LLC">Viz Media LLC</option>
      </select></div>
      <div className="create-groups">
      <label htmlFor="genre">Genre:</label>
      <input type="text" id="genre" placeholder="Genre" required/>
      </div>
      <div className="create-groups">
      <label htmlFor="pages"> Number of pages</label>
      <input type="number" id="places" placeholder="Number of pages" required/>
      </div>
      <div className="create-groups">
      <label htmlFor="rating">Rating</label>
      <input type="number" name="rating" id="rating" required />
      </div>
      <div className="create-groups">
      <label htmlFor="synopsis">Synopsis</label>
      <textarea name="synopsis" id="synopsis" placeholder="synopsis" required> 
        </textarea></div>
      <button type="submit" className="sub-button">
          Submit
        </button>
     </form>
  </main>

    );
}
export default Create;