import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingContainer from './containers/LandingContainer';
import RecipeSearch from './containers/RecipeSearchContainer';
import RecipeDetails from './components/RecipeDetails';
import Pantry from './components/Pantry';
import Recipe from './components/Recipe';

const App = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Get ID numbers of user favorite recipes
  const getFavoriteIDs = () => {
    fetch('api/favorites?id=true')
    .then(res => res.json())
    .then(favoriteIDs => setFavorites(favoriteIDs))
    .catch(err => console.log(err));  
  }

  const buildRecipes = (recipes) => {
    setRecipes(recipes.map((recipe) => {
      getFavoriteIDs();
      return (
        <Recipe
          key={recipe.title}
          image={recipe.image}
          title={recipe.title}
          id={recipe.id}
          fav={(favorites.includes(recipe.id))}
        />
      );
    }))
  }

  return (
    <div className="router">
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <LandingContainer recipes={recipes} buildRecipes={buildRecipes}/>
          </Route>
          <Route path="/search">
            <RecipeSearch recipes={recipes} buildRecipes={buildRecipes}/>
          </Route>
          <Route exact path="/pantry" component={Pantry} />
          <Route exact path="/recipe" component={RecipeDetails} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
