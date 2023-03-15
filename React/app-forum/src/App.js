import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testing from "./Pages/Testing";
import Profile from "./Pages/Profile";
import Home from "./Pages/Dashbord"
import {Navbar} from '../src/Modules'
import "./App.css"

// import Home from "./Pages/Dashbord";
// import Navbar from "./Component/navbar/Navbar";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Navbar/>}>
             <Route path="Dashbord" element={<Home />}/>
             <Route path="Profile" element={<Profile />}/>
             
          </Route>

           
        </Routes>
     </Router>
  );
}

export default App;
