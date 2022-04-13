import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './Navbar.css'

function Navbar () {

  return (
    <Routes>
    {<Route path="/Home" exact element={<Home />} />}
    <Route path="/myDocs" exact element={<myDocs />} />
    <Route path="/Login" exact element={<Login />} />
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
  );

}

export default Navbar;