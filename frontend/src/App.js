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
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ManageReservations from "./admin/ManageReservations";
import ManageQueries from "./admin/ManageQueries";
import ManageOrder from "./admin/ManageOrder";
import ManageUsers from "./admin/ManageUsers";
import ManageContent from "./admin/ManageContent";
import ReportGeneration from "./admin/ReportGeneration";
import SystemSettings from "./admin/SystemSettings";

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

        <Route exact path="/admin" element={ <AdminLogin/>}></Route>
        <Route exact path="/admin/dashboard" element={ <AdminDashboard/>}></Route>
        <Route exact path="/admin/reservations" element={ <ManageReservations/>}></Route>
        <Route exact path="/admin/queries" element={ <ManageQueries/>}></Route>
        <Route exact path="/admin/orders" element={ <ManageOrder/>}></Route>
        <Route exact path="/admin/users" element={ <ManageUsers/>}></Route>
        <Route exact path="/admin/content" element={ <ManageContent/>}></Route>
        <Route exact path="/admin/reports" element={ <ReportGeneration/>}></Route>
        <Route exact path="/admin/settings" element={ <SystemSettings/>}></Route>
       

     
      </Routes>

      </Router>
    </div>
  );
}

export default App;
