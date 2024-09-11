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
import Profile from "./pages/Profile";


import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ManageReservation from "./admin/adminManageReservation/ManageReservation";
import ManageQueries from "./admin/ManageQueries";
import ManageOrder from "./admin/adminManageOrder/ManageOrder";
import ManageUsers from "./admin/adminManageUsers/ManageUsers";
import AdminAddUser from "./admin/adminManageUsers/AdminAddUser";
import AdminEditUser from "./admin/adminManageUsers/AdminEditUser";
import ManageMenu from "./admin/adminManageMenu/ManageMenu";
import AdminAddMenu from "./admin/adminManageMenu/AdminAddMenu";
import AdminEditMenu from "./admin/adminManageMenu/AdminEditMenu";
import ManageCategory from "./admin/adminManageMenu/ManageCategory";
import ManageTables from "./admin/adminManageTables/ManageTables"
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
        <Route exact path="/home" element={ <Home/>}></Route>
        <Route exact path="/signin" element={ <Signin/>}></Route>
        <Route exact path="/signup" element={ <Signup/>}></Route>
        <Route exact path="/menu" element={ <Menu/>}></Route>
        <Route exact path="/reservation" element={ <Reservation/>}></Route>
        <Route exact path="/order" element={ <Order/>}></Route>
        <Route exact path="/gallery" element={ <Gallery/>}></Route>
        <Route exact path="/about" element={ <About/>}></Route>
        <Route exact path="/contact" element={ <Contact/>}></Route>
        <Route exact path="/profile" element={ <Profile/>}></Route>

        {/* Routing Admin pages' paths */}
        <Route exact path="/admin" element={ <AdminLogin/>}></Route>
        <Route exact path="/admin/dashboard" element={ <AdminDashboard/>}></Route>
        <Route exact path="/admin/reservations" element={ <ManageReservation/>}></Route>
        <Route exact path="/admin/queries" element={ <ManageQueries/>}></Route>
        <Route exact path="/admin/orders" element={ <ManageOrder/>}></Route>
        <Route exact path="/admin/users" element={ <ManageUsers/>}></Route>
        <Route exact path="/admin/adduser" element={ <AdminAddUser/>}></Route>
        <Route exact path="/admin/edituser/:id" element={ <AdminEditUser/>}></Route>
        <Route exact path="/admin/menu" element={ <ManageMenu/>}></Route>
        <Route exact path="/admin/addmenu" element={ <AdminAddMenu/>}></Route>
        <Route exact path="/admin/editmenu/:id" element={ <AdminEditMenu/>}></Route>
        <Route exact path="/admin/category" element={ <ManageCategory/>}></Route>
        <Route exact path="/admin/tables" element={ <ManageTables/>}></Route>
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
