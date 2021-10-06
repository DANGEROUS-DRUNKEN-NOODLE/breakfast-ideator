import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import RecipeSearch from './components/RecipeSearch';
import RecipeDetails from './components/RecipeDetails';
import Pantry from './components/Pantry';
import Signup from './components/Signup'

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/pantry" component={Pantry} />
          <Route exact path="/recipe" component={RecipeDetails} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
