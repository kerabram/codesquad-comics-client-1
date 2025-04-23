function Signup() {
    return (
        <div>
            <div>Signup</div>
            <main className="update-container">
                <form className="update-form">
                    <div className="form-groups">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" value="title value stored in database" />
                    </div>
                    <div className="form-groups">
                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" value="author value stored in database" />
                    </div>
                    <div className="form-groups">
                        <label htmlFor="publisher">Publisher:</label>
                        <select name="publisher" id="publisher">
                            <option value="" disabled selected>publisher value stored in database</option>
                            <option value="BOOM! Box">BOOM! Box</option>
                            <option value="DC Comics">DC Comics</option>
                            <option value="Icon Books">Icon Books</option>
                            <option value="Image Comics">Image Comics</option>
                            <option value="Simon & Schuster">Simon & Schuster</option>
                            <option value="Top Shelf Productions">Top Shelf Productions</option>
                        </select>
                    </div>
                </form>
            </main>
        </div>
    );
}
      
export default Signup;