import React, { useState } from "react";
import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const RegisterPage = () => {
  const [usernameReg, setEmail] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [phoneReg, setPhone] = useState("");

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Axios.post(BASE_URL + "/register", {
      username: usernameReg,
      password: passwordReg,
      phoneNumber: phoneReg,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={register}>
        <div>
          <h1>Register-Page</h1>
          <label>Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
          <label>Phone Number:</label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button type="submit" value="register">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;