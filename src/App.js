import React,{useState} from 'react';
import './App.css';
import { LoginPage } from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import {BrowserRouter,Route} from 'react-router-dom'

export const App = ()=> {

  return (
      <BrowserRouter>
      <div>
        <Route path="" component={LoginPage} exact={true}/>
        <Route path="/register" component={RegisterPage}/>
      </div>
      </BrowserRouter>
  );
}

export default App;
