import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <HeaderBar />

            
        </header>
      </Router>
    </div>
  );
}

export default App;