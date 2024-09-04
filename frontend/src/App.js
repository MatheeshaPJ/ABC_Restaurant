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
import StaffLogin from "./staff/StaffLogin";  
import StaffDashboard from "./staff/StaffDashboard";  
import StaffManageReservations from "./staff/ManageReservations";  
import StaffManageQueries from "./staff/ManageQueries";  
import StaffManageOrders from "./staff/ManageOrders";  
import StaffUpdateProfile from "./staff/UpdateProfile";  
import StaffSystemSettings from "./staff/SystemSettings";  
import StaffLogout from "./staff/Logout";  

function App() {
  return (
    <div >
      <Router>

      <Routes>

        {/* Routing Customer pages' paths */}
        <Route exact path="/" element={ <Home/>}></Route>
        <Route exact path="/signin" element={ <Signin/>}></Route>
        <Route exact path="/signup" element={ <Signup/>}></Route>
        <Route exact path="/menu" element={ <Menu/>}></Route>
        <Route exact path="/reservation" element={ <Reservation/>}></Route>
        <Route exact path="/order" element={ <Order/>}></Route>
        <Route exact path="/gallery" element={ <Gallery/>}></Route>
        <Route exact path="/about" element={ <About/>}></Route>
        <Route exact path="/contact" element={ <Contact/>}></Route>

        {/* Routing Admin pages' paths */}
        <Route exact path="/admin" element={ <AdminLogin/>}></Route>
        <Route exact path="/admin/dashboard" element={ <AdminDashboard/>}></Route>
        <Route exact path="/admin/reservations" element={ <ManageReservations/>}></Route>
        <Route exact path="/admin/queries" element={ <ManageQueries/>}></Route>
        <Route exact path="/admin/orders" element={ <ManageOrder/>}></Route>
        <Route exact path="/admin/users" element={ <ManageUsers/>}></Route>
        <Route exact path="/admin/content" element={ <ManageContent/>}></Route>
        <Route exact path="/admin/reports" element={ <ReportGeneration/>}></Route>
        <Route exact path="/admin/settings" element={ <SystemSettings/>}></Route>

        {/* Routing Staff pages' paths */}
        <Route exact path="/staff" element={ <StaffLogin/>}></Route>
        <Route exact path="/staff/dashboard" element={ <StaffDashboard/>}></Route>
        <Route exact path="/staff/reservations" element={ <StaffManageReservations/>}></Route>
        <Route exact path="/staff/queries" element={ <StaffManageQueries/>}></Route>
        <Route exact path="/staff/orders" element={ <StaffManageOrders/>}></Route>
        <Route exact path="/staff/profile" element={ <StaffUpdateProfile/>}></Route>
        <Route exact path="/staff/settings" element={ <StaffSystemSettings/>}></Route>
        <Route exact path="/staff/logout" element={ <StaffLogout/>}></Route>

       

     
      </Routes>

      </Router>
    </div>
  );
}

export default App;
