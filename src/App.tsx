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

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AdsPage} />
        <Route exact path="/addAd" component={NewAdPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="/editAd/:id" component={EditAdPage} />
        <Route exact path="/:id" component={AdPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
