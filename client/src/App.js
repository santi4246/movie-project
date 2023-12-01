// Styles
import "./styles/app.css";
// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Error from "./components/Error";
// Library
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "https://movie-project-pvjd.onrender.com/api"

function App() {
  return (
    <div className = "app">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = { <Home/> }/>
          <Route path = "/create" element = { <Form/> }/>
          <Route path = "*" element = { <Error/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;