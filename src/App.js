
import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import SiteCards from './components/SiteCards';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import SignUpForm from './users/SignUpForm';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <HeaderBar />
          <SiteCards />
            
        </header>
      </Router>
    </div>
  );
}

export default App;
