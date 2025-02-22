<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
import React from "react";
=======
// import React from "react";
>>>>>>> Stashed changes
=======
// import React from "react";
>>>>>>> Stashed changes
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  
  const titleStyle = {
    fontSize: "60px",
    paddingTop: "50px",
    textAlign:"center"
  };
  
  return (
    <nav>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/another">Another</Link>
        <Link to="/contact">Contact</Link>
        <button type="submit" className="btn btn-secondary">Login</button>
        <button type="submit" className="btn btn-primary">SignUp</button>
      </ul>
      <h1 style={titleStyle}>RoadmapAI</h1>
    </nav>
  );
};
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
export default Navbar;
