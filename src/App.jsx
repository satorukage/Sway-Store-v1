import React from "react";
import { Space } from "antd";
import Content from "./Components/Content/Content";
import SideMenu from "./Components/SideMenu/SideMenu";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="spacer">
        <SideMenu/>
        <div className="cont">
        <Content/>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
