import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../AuthService";
import Logout from "./Logout";
const Navbar = () => {
  const navigate = useNavigate();
  const titleStyle = {
    fontSize: "60px",
    paddingTop: "50px",
    textAlign:"center"
  };
  const [authStatus, setAuthStatus] = useState(false);
  
    useEffect(() => {
      setAuthStatus(isAuthenticated());
    }, []);
  
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/another">Another</Link>
        <Link to="/contact">Contact</Link>
        {authStatus ?
        <>
            <button type="submit" className="btn btn-secondary" onClick={()=>navigate("/login")}>Login</button>
            <button type="submit" className="btn btn-primary" onClick={()=>navigate("/register")}>SignUp</button>
        </>
        :
        <Logout/>
        // <></>
        }
        </ul>
      <h1 style={titleStyle}>
        <span style={{fontWeight: "bold"}} className="text-secondary" >Road</span>
        <span style={{fontWeight: "bold"}}>map</span>
        <span style={{ color: "#3046ed", fontWeight: "bold"}}>AI</span>
      </h1>
    </nav>
  );
};
export default Navbar;
