import { useNavigate } from "react-router-dom";

function Signup( {user, setUser}) {
    const navigate = useNavigate();
    const handleSignupForm = (e) => {
        e.preventDefault();
        const body = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            username: e.target.username.value,
            password: e.target.password.value
        };
        fetch("https://course-project-codesquad-comics-server.onrender.com/signup/local", {
            method: "POST",
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Signup successful:", data);
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            navigate("/admin");
        })
        .catch((error) => console.error("Error signing up:", error));
    };
    return (
        <div>
            <div>Signup</div>
            <main className="update-container">
                <form className="update-form">
                    <div className="form-groups">
                        <label htmlFor="firstName">FirstName:</label>
                        <input type="text" id="firstName" name="firstName" required/>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="lastName">LastName:</label>
                        <input type="text" id="lastName" name="lastName" required/>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                </form>
            </main>
        </div>
    );
}
      
export default Signup;