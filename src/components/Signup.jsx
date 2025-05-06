function Signup( {user, setUser}) {
    //Kit: you need to have a handler function here, similar to login.jsx. Uncomment.
    /*
    
    */
    const handleSignupFormSubmit = (e) => {
        //prevent default

        //console.log values
    }
    return (
        <div>
            <div>Signup</div>
            <main className="update-container">
                {/* Kit: add handleSignupFormSubmit to the form element */}
                <form className="update-form">
                    <div className="form-groups">
                        <label htmlFor="firstName">FirstName:</label>
                        <input type="text" id="firstName" name="firstName" value="firstName" />
                    </div>
                    <div className="form-groups">
                        <label htmlFor="lastName">LastName:</label>
                        <input type="text" id="lastName" name="lastName" value="lastName" />
                    </div>
                    <div className="form-groups">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value="username" />
                    </div>
                    <div className="form-groups">
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" name="password" value="password" />
                    </div>
                </form>
            </main>
        </div>
    );
}
      
export default Signup;