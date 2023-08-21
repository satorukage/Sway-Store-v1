import React from "react";
import './Content.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../../Pages/Home";
import Iphones from "../../Pages/Iphones";
import Macs from "../../Pages/Macs";
import Android_tabs from "../../Pages/Android_tabs";
import Ipad from "../../Pages/Ipads";
import Windows from "../../Pages/Windows";
import Androids from "../../Pages/Androids";
import Cart from "../../Pages/Cart";
import Login from "../../Pages/Login";
import Registration from "../../Pages/Registration";


function Content() {
  return (
    <div className="AppContent">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route> 
        <Route path="/iphones" element={<Iphones></Iphones>}></Route>
        <Route path="/androids" element={<Androids></Androids>}></Route>
        <Route path="/ipads" element={<Ipad></Ipad>}></Route>
        <Route path="/androidT" element={<Android_tabs></Android_tabs>}></Route>
        <Route path="/macs" element={<Macs></Macs>}></Route>
        <Route path="/windows" element={<Windows></Windows>}></Route>
      </Routes>
    </div>
  );
}

export default Content;
