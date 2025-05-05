import React from 'react' 

function Login (){
    const handleLoginForm = (e) =>{
      e.preventDefault();
    console.log("Login Form Submitted");
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    }

    return (
    <main>
       <form className="login-form"  onSubmit={handleLoginForm} >
                <div className="login-groups">
                       <label htmlFor="username">Username:</label>
                      <input type="text" id="username" name="username" value="username" />
                </div>
                 <div className="login-groups"   >
                       <label htmlFor="password"><Password></Password>:</label>
                      <input type="text" id="password" name="password" value="password" />
                 </div>
                <input type="submit" />
            </form> 
      </main>
    );
}
export default Login;

