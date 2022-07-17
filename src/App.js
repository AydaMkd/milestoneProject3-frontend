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
import NewRecipe from './components/NewRecipe';
import Recipes from './components/Recipes';
import About from './components/About';
import MyRecipes from './components/MyRecipes';

function App() {
  return (

    <CurrentUserProvider>
      <BrowserRouter>
<<<<<<< HEAD
        <HeaderBar /> 
=======
        <HeaderBar />
>>>>>>> 65ba96e59418e76bed8b9296ba2889c24ea39784
        <SiteCards />
        <Routes>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
<<<<<<< HEAD
          <Route path="/new" element={<NewRecipe />} />
=======
>>>>>>> 65ba96e59418e76bed8b9296ba2889c24ea39784
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/myRecipes" element={<MyRecipes />} />
          <Route path="/newRecipe" element={<NewRecipe />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>

  );
}

export default App;