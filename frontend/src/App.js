import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from './components/signUpForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpForm />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
