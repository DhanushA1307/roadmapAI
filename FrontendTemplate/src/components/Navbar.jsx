import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <h1>RoadmapAI</h1>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/another">Another</Link>
        <Link to="/contact">Contact</Link>
        <button type="submit" className="btn btn-secondary">Login</button>
        <button type="submit" className="btn btn-primary">SignUp</button>
      </ul>
    </nav>
  );
};

export default Navbar;
