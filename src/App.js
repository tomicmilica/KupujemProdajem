import React,{useState} from 'react';
import './App.css';
import { LoginPage } from './components/LoginPage';

export const App = ()=> {

  return (
    <div> 
      <div>
          <LoginPage/>
      </div>
    </div>
  );
}

export default App;
