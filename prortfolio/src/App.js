
import React from 'react';
import './App.css';
import About from './components/About/About';
import Home from './components/home/Home';
import Nav from './components/navbar/Nav';
import Works from './components/skills/Works';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Home />
    <About />
    <Works />
    <Footer />
    </div>
    </Router>
  )
}

export default App;
