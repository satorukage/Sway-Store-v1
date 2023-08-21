import React from "react";
import "./Header.css";
import { Badge, Button, Image, Space, Typography } from "antd";
import Searchbar from "./Searchbar";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navitage = useNavigate();
  return (
    <div className="App-Header">
      <Image
        width={250}
        src="../src/images/swaybc.png"
      ></Image>
      <Searchbar/>
      <Space>
        <Link to='/login'>
        <Button type="default" icon={<UserOutlined style={{fontSize: 24}}/>}></Button> 
        </Link>

        <Link to='/cart'>
        <Button type="default"  icon={<ShoppingCartOutlined style={{fontSize: 24}}/>}></Button> 
        </Link>
      </Space>
    </div>
  );
};






export default Header;
