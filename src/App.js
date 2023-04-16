//import {useState, useEffect} from "react"; 
//import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/Detail";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}></Route>
      <Route path="/" element={<Home/>} />
    </Routes>


  </Router>); 
}

export default App;

