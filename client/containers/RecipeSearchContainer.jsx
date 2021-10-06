import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../components/Search';
import SearchFeed from '../components/SearchFeed';

//mui stuff

const RecipeSearch = (props) => {

  // Get recipes from server and build recipe component array
  // Redirect to the /search/feed to display fetched recipes
  const searchRecipes = () => {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(recipes => {
        props.buildRecipes(recipes);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Switch>
        <Route exact path="/search">            
          <Search searchRecipes={searchRecipes}/>
        </Route>

        <Route exact path="/search/feed">
          <SearchFeed recipes={props.recipes} />
        </Route>

      </Switch>
    </div>
    );
  }

export default RecipeSearch;
