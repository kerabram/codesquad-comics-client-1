function About (){
  <div> About </div>
    return (
      <footer className="footer-contents">
      <div className="visit-us">
          <h3>VISIT US</h3> 
          <p>CodeSquad Comics </p>
          <p> Dorchester Ave </p>
          <p>Boston, MA 02124</p>
        </div>
          <div className="foot-links">
          <h3>LINKS</h3>
          <ul>
            <li><a href="i#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">LOGIN</a></li>
        </ul>
        </div>
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className="product-of">
          <h3>A PRODUCT OF</h3>
          <a
            href=" http://codesquad.org/"
            target="_blank"
    
            rel="noopener noreferrer">
            <img src="/public/images/CodeSquad-logo.jpg" alt="CodeSquad Logo" />
          </a>
        </div>
        </footer>
    );
}
export default About;

    
    