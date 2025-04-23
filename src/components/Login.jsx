function Login (){
    return (
        <main class="update-container">
        <h1> UPDATE COMIC</h1>
        <form class="update-form">
          <div class="form-groups">
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" value="title value stored in database"></input></div>
        <div class="form-groups" >
          <label for="author">Author:</label>
          <input type="text" id="author" name="title" value="author value stored in database"></input>
            </div>

           <div class="form-groups" >
          <label for="publisher">Publisher:</label>
        <select name="publisher" id="publisher">
            <option value="disabled selected" >publisher value stored in database</option>
            <option value="BOOM! Box">BOOM! Box:</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Harry N. Abrams">Harry N. Abrams</option>
            <option value="Icon Bookks">Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon & Schuster"> Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="Viz Media LLC">Viz Media LLC</option>
       </select>
       </div>
       <main class="form-groups" >
          <label for="genre">Genre</label>
          <input type="number" id="genre" name="genre" value="genre stored in database"></input></main>
          <div class="form-groups" >
          <label for="pages">Number of pages</label>
          <input type="text" name="pages" id="pages" value="255"></input>
          </div>
          <div class="form-groups" >
          <label for="rating">Rating</label>
          <input type="number" id="rating" name="rating" value="5"></input>
          </div>
          <div class="form-groups">
          <label for="synopsis">Synopsis</label>
          <textarea name="synopsis" id="synopsis">
  value stored in database</textarea> 
        </div>
        <button type="submit" class="sub-button"> Submit</button>
        </form> 
      </main>
    );
}
export default Login;

