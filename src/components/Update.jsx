function Update() {
  return (
    <main className="update-container">
      <h1> UPDATE COMIC</h1>
      <form className="update-form">
        <div className="form-groups">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value="title value stored in database"
            />
        </div>
        <div className="form-groups">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="title"
            value="author value stored in database"
          />
        </div>

        <div className="form-groups">
          <label htmlFor="publisher">Publisher:</label>
          <select name="publisher" id="publisher">
            <option value="disabled selected">
              publisher value stored in database
            </option>
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
            value="genre stored in database"
            />
        </main>
        <div className="form-groups">
          <label htmlFor="pages">Number of pages</label>
          <input type="text" name="pages" id="pages" value="255"/>
        </div>
        <div className="form-groups">
          <label htmlFor="rating">Rating</label>
          <input type="number" id="rating" name="rating" value="5"/>
        </div>
        <div className="form-groups">
          <label htmlFor="synopsis">Synopsis</label>
          <textarea name="synopsis" id="synopsis">
            value stored in database
          </textarea>
        </div>
        <button type="submit" className="sub-button">
          Submit
        </button>
      </form>
    </main>
  );
}
export default Update;
