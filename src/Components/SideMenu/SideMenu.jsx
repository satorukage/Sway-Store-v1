import React from 'react'
import './SideMenu.css'
import { Menu } from "antd";
import {
   TabletOutlined,
    HomeOutlined,
    PoweroffOutlined,
    MobileOutlined,
    LaptopOutlined,
  } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


function SideMenu(){
    const navitage = useNavigate();
    return (
    
    <Menu className='menu'
      onClick={({ key }) => {
        if (key == "signout") {
          // TODO, SIGN OUT FEATURE
        } else {
          navitage(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        { label: "Home", 
          key: "/", 
          icon: <HomeOutlined></HomeOutlined> },
        {
          label: "Phones",
          key: "/phones",
          icon: <MobileOutlined/>,
          children:[
            {
              label: "Iphones",
              key: "/iphones"
            },
            {
              label: "Androids",
              key: "/androids"
            }
          ]
        },
        {
          label: "Tablets",
          key: "/tablets",
          icon: <TabletOutlined />,
          children:[
            {
              label: "Ipads",
              key: "/ipads"
            },
            {
              label: "Android Tablets",
              key: "/androidT"
            }
          ]
        },
        {
          label: "Laptops",
          key: "/laptops",
          icon: <LaptopOutlined />,
          children:[
            {
              label: "Macs",
              key: "/macs"
            },
            {
              label: "Windows",
              key: "/windows"
            }
          ]
        },
        
      ]}
    ></Menu>
    
    )
  }

export default SideMenu