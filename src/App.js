import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import HeaderBar from './components/HeaderBar';
import SiteCards from './components/SiteCards';
import { BrowserRouter as Router, Link, Route, Routes, Redirect } from 'react-router-dom'
import LoginForm from './users/LoginForm'
import SignUpForm from './users/SignUpForm';
import CurrentUserProvider from './contexts/CurrentUser';
import { BrowserRouter } from 'react-router-dom';
import NewRecipe from './components/NewRecipe';
import Nutrition from './components/Nutrition';
import Recipes from './components/Recipes';
import Edit from './components/Edit';
import About from './components/About';
import MyRecipes from './components/MyRecipes';
import Search from './components/Search'

function App() {

  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <HeaderBar />
        <SiteCards />
        <Routes>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/recipes" element={<Recipes />} /> 
          <Route path="/myRecipes" element={<MyRecipes />} /> 
          <Route path="/newRecipe" element={<NewRecipe />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/search/:query" element={<Search />} />    
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;