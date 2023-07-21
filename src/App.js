import React from "react";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />}/> 
        <Route path="/register" element = {<Register />}/>
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </Router>
  );
}


export default App;