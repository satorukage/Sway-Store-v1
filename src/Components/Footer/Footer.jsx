import React from "react";
import "./Footer.css";
import { Typography } from "antd";
const Footer = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:0621800545" target={'_blank'}>Contact Us</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>Terms of Use</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>&#169; 2023 www.SwayPhones.com - All Rights Reserved.
</Typography.Link>
    </div>
  );
};

export default Footer;
