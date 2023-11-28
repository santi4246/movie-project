import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import axios from "axios";
axios.defaults.baseURL = "https://movie-project-pvjd.onrender.com/api"

function App() {
  return (
    <Routes>
      <Route path = "/" element = { <Home/> }/>
      <Route path = "/create-movie" element = { <Form/> }/>
    </Routes>
  );
}

export default App;