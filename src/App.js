import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Login from './components/login';
import Shopkeeper from "./components/shopkeeper";
import Admin from "./components/admin";
import Register from "./components/register";
import Home from "./components/home";
import About from './components/about';
import Contact from './components/contact';
import White from './components/white-ration';
import Yellow from './components/yellow-ration';
import Saffron from './components/saffron-ration';
import Complaint from './components/complaint';
import Navbar from './components/navbar';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
          <Switch>
          <Route exact path="/"  component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/shopkeeper" component={Shopkeeper}></Route>
            <Route path="/admin"  component={Admin}></Route>
            <Route path="/white" component={White}></Route>
            <Route path="/yellow" component={Yellow}></Route>
            <Route path="/saffron" component={Saffron}></Route>
            <Route path="/complaint" component={Complaint}></Route>
            
          </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
