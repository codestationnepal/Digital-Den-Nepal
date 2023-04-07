import React from "react";
import "../signin/signup.css";
export function Signup() {
  return (
    <>
      <div className="form-cont">
        <form action="#" method="#" className="form-container">
          <div className="field">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              value=""
              className="firstname"
              placeholder="Enter your first name"
            />
          </div>
          <div className="field">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              value=""
              className="lastname"
              placeholder="Enter your last name"
            />
          </div>
          <div className="field">
            <label htmlFor="emial">Email</label>
            <input
              type="text"
              value=""
              className="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value=""
              className="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              value=""
              className="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="field">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="text"
              value=""
              className="cpassword"
              placeholder="Enter your confirm password"
            />
          </div>
          <div className="field">
            <button>Register</button>
          </div>
        </form>
      </div>
    </>
  );
}
