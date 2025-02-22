// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// const Navbar = () => {
  
//   const titleStyle = {
//     fontSize: "60px",
//     paddingTop: "50px",
//     textAlign:"center"
//   };
  
//   return (
//     <nav>
//       <ul>
//         <Link to="/home">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/another">Another</Link>
//         <Link to="/contact">Contact</Link>
//         <button type="submit" className="btn btn-secondary">Login</button>
//         <button type="submit" className="btn btn-primary">SignUp</button>
//       </ul>
//       <h1 style={titleStyle}>RoadmapAI</h1>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const titleStyle = {
//         fontSize: "60px",
//         paddingTop: "50px",
//         textAlign:"center"
//       };

//   return (
//     <nav>
//       <div className="hamburger" onClick={toggleMenu}>
//         &#9776; {/* Unicode for hamburger icon */}
//       </div>
      
//       <ul className={isOpen ? "nav-links open" : "nav-links"}>
//         <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
//         <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
//         <Link to="/another" onClick={() => setIsOpen(false)}>Another</Link>
//         <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//         <button type="submit" className="btn btn-secondary">Login</button>
//         <button type="submit" className="btn btn-primary">SignUp</button>
//       </ul>
      
//       <h1 className={titleStyle}>RoadmapAI</h1>
//     </nav>
//   );
// };

// export default Navbar;
