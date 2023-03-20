import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  CreateProfile from "./Pages/Testing"
import Login from "./Component/User/login";
import Profile from "./Pages/Profile";
import Home from "./Pages/Dashbord"
import Forum from "./Pages/Forum";
import EditForum from "./Pages/EditForum";
import CreateForum from "./Component/Forum/AddForum";
import {Navbar} from '../src/Modules'
import "./App.css"
import CreateAccont from "./Component/User/addUser"

// import Home from "./Pages/Dashbord";
// import Navbar from "./Component/navbar/Navbar";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Navbar/>}>
             <Route path="Dashbord" element={<Home />}/>
             <Route path="Profile" element={<Profile />}/>
             <Route path="Forum" element={<Forum />}/>
             <Route path="Forum/Edit" element={<EditForum />}/>
             <Route path="Dasbord/NewForum" element={<CreateForum />}/>
             <Route path="Profile/Edit" element={< CreateProfile />}/>
             <Route path="Login" element={< Login/>}/>
             <Route path="Login/Register" element={<CreateAccont />}/>


             
          </Route>

           
        </Routes>
     </Router>
  );
}

export default App;
