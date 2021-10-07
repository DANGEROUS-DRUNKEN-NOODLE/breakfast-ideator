import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../components/Search';
import SearchFeed from '../components/SearchFeed';

const RecipeSearch = (props) => {
  const [favoriteIDs, setFavoriteIDds] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // Get recipes from server 
  const getRecipes = () => {
    updateFavoriteIDs();
    fetch('/api/recipes')
      .then(res => res.json())
      .then(recipes => {
        setRecipes(recipes);
      })
      .catch(err => console.log(err))
  }

  // Get ID numbers of user favorite recipes
  const updateFavoriteIDs = () => {
    fetch('/api/favorites?id=true')
    .then(res => res.json())
    .then(favoriteIDs => {
      setFavoriteIDds(favoriteIDs);
      console.log('updateFavoriteIDs - favoriteIDs: ', favoriteIDs);
    })
    .catch(err => console.log(err));  
  }

  return (
    <div>
      <Switch>
        <Route exact path="/search">            
          <Search getRecipes={getRecipes}/>
        </Route>

        <Route exact path="/search/feed">
          <SearchFeed 
            recipes={recipes} 
            favoriteIDs={favoriteIDs}
            updateFavoriteIDs={updateFavoriteIDs}
          />
        </Route>

      </Switch>
    </div>
    );
  }

export default RecipeSearch;
