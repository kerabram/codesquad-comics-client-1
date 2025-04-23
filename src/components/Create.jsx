function Create (){
    return (
    <main className="create-container">
      <h1>CREATE NEW COMIC</h1>
      <form className="create-form">
        <div className="create-groups">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" placeholder="title"></input>
      </div>
      <div className="create-groups">
      <label htmlFor="author">Author</label>
      <input type="text" id="author" name="author" placeholder="author"></input>
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
      <input type="text" id="genre" placeholder="Genre"></input>
      </div>
      <div className="create-groups">
      <label htmlFor="pages"> Number of pages</label>
      <input type="number" id="places" placeholder="Number of pages"></input>
      </div>
      <div className="create-groups">
      <label htmlFor="rating">Rating</label>
      <input type="number" name="rating" id="rating"></input>
      </div>
      <div className="create-groups">
      <label htmlFor="synopsis">Synopsis</label>
      <textarea name="synopsis" id="synopsis">Synopsis</textarea></div>
     </form>
  </main>

    );
}
export default Create;