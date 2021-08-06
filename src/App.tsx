import React from "react";
import "./App.css";
import { LoginPage } from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdsPage from "./components/AdsPage";
import NewAdPage from "./components/AddNewAd"
import EditAdPage from "./components/EditAdPage";
import { AdPage } from "./components/AdPage";
import { NavbarIndex } from "./components/Navbar/NavbarIndex";
import axios from "axios";
import { interceptors_response, interceptors_request } from './configAuth'
const BASE_URL = process.env.REACT_APP_BASE_URL;


interceptors_request();
interceptors_response();

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarIndex />
      <Switch>
        <Route exact path="/" component={AdsPage} />
        <Route exact path="/addAd" component={NewAdPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="/editAd/:id" component={EditAdPage} />
        <Route exact path="/:id" component={AdPage} />
        <Route exact path="remove/:id" component={AdPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
