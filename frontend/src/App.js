import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div >
      <Router>

      <Routes>
        <Route exact path="/" element={ <Home/>}></Route>
        <Route exact path="/signin" element={ <Signin/>}></Route>
        <Route exact path="/signup" element={ <Signup/>}></Route>
        <Route exact path="/menu" element={ <Menu/>}></Route>
        <Route exact path="/reservation" element={ <Reservation/>}></Route>
        <Route exact path="/order" element={ <Order/>}></Route>
        <Route exact path="/gallery" element={ <Gallery/>}></Route>
        <Route exact path="/about" element={ <About/>}></Route>
        <Route exact path="/contact" element={ <Contact/>}></Route>

     
      </Routes>

      </Router>
    </div>
  );
}

export default App;
