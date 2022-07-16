import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import HeaderBar from './components/HeaderBar';
import SiteCards from './components/SiteCards';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm'
import SignUpForm from './users/SignUpForm';
import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (

    <CurrentUserProvider>
      <BrowserRouter>
        <HeaderBar /> 
         {/* <SiteCards /> */}
        <Routes>
      
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>

  );
}

export default App;