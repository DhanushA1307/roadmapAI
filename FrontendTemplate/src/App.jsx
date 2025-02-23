import React, { useEffect, useState } from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Another from "./pages/Another"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import DisplayAuth from "./components/DisplayAuth"
import { isAuthenticated } from "./AuthService"
function App() {

  const [authStatus, setAuthStatus] = useState(false);
  
    useEffect(() => {
      setAuthStatus(isAuthenticated());
    }, []);
  
  return (
    <div style={{backgroundColor: "black", height: "100vh"}}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={authStatus ? <Home/> :<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/another' element={<Another/>}>Another</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
