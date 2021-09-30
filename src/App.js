import React from 'react'
import "./App.css";
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import About from './Components/About';
import Signin from './Components/Signin';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar/>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>

      <Route path="/contact">
        <Contact/>
      </Route>

      <Route path="/signin">
        <Signin/>
      </Route>

      <Route path="/signup">
        <Signup/>
      </Route>
    </div>
  )
}

export default App
