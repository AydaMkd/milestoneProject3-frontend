
import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm'
import SignUpForm from './users/SignUpForm';

function App() {
  return (

    
    <div className="App">
      <Router>
        <header>
          <div className="navBar">
            <HeaderBar />
          </div>

        <div className="display">
          <Routes>
            <Route pathe="/" element={<SignUpForm/>} />
            <Route path="/login" element={<LoginForm/>} />
          </Routes>



        </div>
            
        </header>
      
      </Router>
    </div>
  );
}

export default App;
