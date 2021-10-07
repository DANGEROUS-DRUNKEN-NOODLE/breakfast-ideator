import React, { useState } from "react";
import { Typography } from "@mui/material";
import LandingFeed from "../components/LandingFeed";

export default function LandingContainer (props) {

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Get user favorites on render
  const getFavoriteRecipes = () => {
    fetch('api/favorites')
      .then(res => res.json())
      .then(recipes => {
        setFavoriteRecipes(recipes);
        console.log(recipes);
      })
      .catch(err => console.log(err));
  };

  return (
    <div id="landing-container">
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
      Favorite Recipes
    </Typography>
      <LandingFeed 
        favoriteRecipes={favoriteRecipes}
      />
    </div>
  );
}