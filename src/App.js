import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Resume from './pages/Resume';
import About from './pages/About';
import Home from './pages/Home';
import Name from './componenets/Name';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom'




import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Route path='/'Componenets={Home} />
   <Navbar />
      {/* <Name /> */}
    </div>
  )
}

export default App
