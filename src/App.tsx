import React from "react";
import "./App.css";
import { LoginPage } from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AdsPage from "./components/AdsPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={AdsPage} exact={true} />
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/register" component={RegisterPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
