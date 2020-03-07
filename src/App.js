import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Component/LandingPage'
import Selection from './Component/Selection'
import AddRecipes from './Component/AddRecipes'
import SavedRecipes from './Component/SavedRecipes'
import SearchRecipes from './Component/SearchRecipes'
import {BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/Selection" component={Selection} />
            <Route path="/SearchRecipes" component={SearchRecipes} />
            <Route path="/SavedRecipes" component={SavedRecipes} />
            <Route path="/AddRecipes" component={AddRecipes} />
         </Switch> 
      </div>
    </Router> 
  );
} 


export default App;
