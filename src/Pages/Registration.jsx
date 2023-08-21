import React from 'react'
import "./Registration.css";
import {
  CloseOutlined,
  LockFilled,
  MailFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
    <div className="wrapper">
        <span className="icon-close">
          <CloseOutlined />
        </span>

        <div className="form-box login">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <UserOutlined></UserOutlined>
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <MailFilled></MailFilled>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <LockFilled></LockFilled>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                I agree to the terms & conditions
              </label>
              
            </div>
            <button type="button" className="btns">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?
                <Link to='/login'>
                <a href="#" className="register-link">
                   Login
                </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration