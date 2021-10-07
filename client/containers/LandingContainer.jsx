import React from "react";
import { Typography } from "@mui/material";
import { ImageList } from "@mui/material";

export default function LandingContainer (props) {

  // Get user favorites on render
  const getFavorites = () => {
    fetch('api/favorites')
      .then(res => res.json())
      .then(recipes => props.buildRecipes(recipes))
      .catch(err => console.log(err));
  };

  return (
    <div id="landing-container">
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
      Favorite Recipes
    </Typography>
      {/* Display favorite recipe results in an @mui image list */}
      <ImageList>
        {props.recipes}
      </ImageList>
    </div>
  );
}