import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Default from './pages/Default'; 
import Recipes from './pages/Recipes'; 
import SingleRecipe from './pages/SingleRecipe'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


class App extends Component {
  render() {
    return (

      
      <Router>

        <main>
         <Navbar />
          <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/recipes" exact component={Recipes} />
             <Route path="/recipes/:id" component={SingleRecipe} />
             <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
