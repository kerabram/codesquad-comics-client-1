import React from 'react' 
import { useNavigate } from "react-router-dom";

function Login ({user, setUser}){
    const navigate = useNavigate();
    const handleLoginForm = (e) =>{
      e.preventDefault();
const body = {
  username: e.target.username.value,
  password: e.target.password.value
};
fetch("https://course-project-codesquad-comics-server.onrender.com/login/local", {
    method: "POST",
    body: JSON.stringify(body)
})
    .then((response) => response.json())
    .then((data) => {
      console.log("Login successful:", data);
     localStorage.setItem("user", JSON.stringify(data));
     setUser(data);
     navigate("/admin"); 
    })
    .catch((error) => console.error("Error logging in:", error));
};

    return (
    <main>
       <form className="login-form"  onSubmit={handleLoginForm} >
                <div className="login-groups">
                       <label htmlFor="username">Username:</label>
                      <input type="text" id="username" name="username" required />
                </div>
                 <div className="login-groups"   >
                       <label htmlFor="password">Password:</label>
                      <input type="password" id="password" name="password" required />
                 </div>
                <input type="submit" />
            </form> 
      </main>
    );
}
export default Login;

