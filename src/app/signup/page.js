"use client";

import { saveUser } from "@/store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function Signup() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Handle input changes for signup form
  const handleSignupChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
  
    dispatch(saveUser(credentials)); 
    alert("User registered successfully!"); 
    setCredentials({ email: "", password: "" }); 
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h2 style={{ fontSize: "40px", color: "yellow" }}>Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <label htmlFor="email" style={{ marginTop: "15px", marginBottom: "5px", color: "yellow" }}>Email:</label>
            <input
              placeholder="Enter Your Email"
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleSignupChange}
              style={{
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
                width: "100%",
                color: "black",
                backgroundColor: "#696969",
              }}
              required
            />
            <label htmlFor="password" style={{ marginBottom: "5px", color: "yellow" }}>Password:</label>
            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleSignupChange}
              style={{
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
                width: "100%",
                color: "black",
                backgroundColor: "#696969",
              }}
              required
            />
            <button
              type="submit"
              style={{
                height: "40px",
                width: "100px",
                marginTop: "6px",
                padding: "10px 20px",
                backgroundColor: "#484848",
                color: "yellow",
                borderRadius: "4px",
                cursor: "pointer",
                border: "1px solid yellow",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
