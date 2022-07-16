import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm'
import SignUpForm from './users/SignUpForm';
import CurrentUserProvider from './contexts/CurrentUser';
import Navigation from './navigation';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (

    <CurrentUserProvider>
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route path="/" element={<HeaderBar/>} />
        <Route path="/sign-up" element={<SignUpForm/>} />
        <Route path="/login" element={<LoginForm/>} />
       
       
      </Routes>
    </BrowserRouter>
  </CurrentUserProvider>

  );
}

export default App;