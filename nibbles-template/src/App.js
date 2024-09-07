import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';



function App() {
  return (
    <Router>
        <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
          </Switch>
    </Router>
  );
}

export default App;

