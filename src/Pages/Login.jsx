import React from "react";
import "./Login.css";
import {
  CloseOutlined,
  LockFilled,
  MailFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      <div className="wrapper">
        <span className="icon-close">
          <CloseOutlined />
        </span>

        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
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
                Remember me{" "}
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="button" className="btns">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <Link to='/register'>
                <a href="#" className="register-link">
                  Register
                </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
