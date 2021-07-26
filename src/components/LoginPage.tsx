import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [usernameLog, setEmail] = useState("");
  const [passwordLog, setPassword] = useState("");

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
    <div className="box-layout">
      <form onSubmit={login}>
        <div>
          <h1>Login-Page</h1>
          <label>Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button type="submit" value="Login">
            Login
          </button>
        </div>
        <Link to="/register" className="btn btn-primary">
          Sign up
        </Link>
      </form>
      </div>
    </>

  );
};
