import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Header ({ user, setUser}) {
    const navigate = useNavigate();

    const handleLogout = () => {
      fetch ("https://course-project-codesquad-comics-server.onrender.com/logout", {
        method: "POST",
    })
    .then(() => {
      console.log("Logout successful"); 
      setUser({});
      localStorage.removeItem("user");
      navigate("/");
    })
    .catch((error) => {
      console.error("Logout failed", error);
      navigate("/admin");
    });
  };

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img
                        src="../../public/images/CodeSquad-Comics-logo.jpg"
                        alt="CodeSquad Comics Logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    {user ? (
                        <>
                            <li><Link to="/admin">ADMIN</Link></li>
                            <li><a href="#" onClick={handleLogout}>LOGOUT</a></li>
                        </>
                    ) : (
                        <li><Link to="/login">LOGIN</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );

}

      
export default Header;




    // return (
    //       <header>
    //         <div className="logo">
    //           <a href="#">
    //             <img
    //             src="../../public/images/CodeSquad-Comics-logo.jpg"
    //             alt="CodeSquad Comics Logo" />
    //           </a>
    //         </div>
    //         <nav>
    //         <ul>
    //           <li><a href="#">HOME</a></li>
    //           <li><a href="#">ABOUT</a></li>
    //           <li><a href="#">LOGIN</a></li>
    //         </ul>
    //       </nav>
    //     </header>
    // );
    // };
