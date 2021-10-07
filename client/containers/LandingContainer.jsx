import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import LandingFeed from "../components/LandingFeed";

export default function LandingContainer (props) {
  
  const [favoriteIDs, setFavoriteIDds] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Get user favorites on render
  const getFavoriteRecipes = () => {
    console.log('Running getFavoriteRecipes');
    fetch('api/favorites')
      .then(res => res.json())
      .then(recipes => {
        setFavoriteRecipes(recipes);
        console.log('favorite recipes retrieved: ', recipes);
      })
      .catch(err => console.log(err));
  };

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

  useEffect(()=>{
    if(favoriteRecipes.length === 0) {
      console.log('useEffect getFavoriteRecipes');
      getFavoriteRecipes();
    }
    console.log('useEffect being run');
  },[])

  return (
    <div id="landing-container">
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
      Favorite Recipes
    </Typography>
      <LandingFeed 
        favoriteRecipes={favoriteRecipes}
        favoriteIDs={favoriteIDs}
        updateFavoriteIDs={updateFavoriteIDs}
      />
    </div>
  );
} 