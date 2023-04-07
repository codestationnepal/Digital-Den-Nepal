import React from "react";
import "./login.css";
import {Link} from "react-router-dom";

export function Login() {
  return (
    <>
    <div className="container-login">
      <form action="#" method="#" className="form-container">
        <div className="form-field">
          <label for="username">Username</label>
          <input
            type="text"
            className="username"
            placeholder="Please Enter Your Username"
          />
        </div>
        <div className="form-field">
          <label for="password">Password</label>
          <input
            type="text"
            className="password"
            placeholder="Please Enter Your Password"
          />
          <a href="#" className="fg">
            Forgot Password ?
          </a>
        </div>
        <div className="form-field">
          <button>Login</button>
        </div>
        <div className="new">
          <p>Don't have an account? <Link to='/signup'>Create New</Link></p>
        </div>
      </form>
      </div>
    </>
  );
}
