import React from "react";
import Recipe from "./Recipe";

// mui components
import { ImageList } from "@mui/material";

const LandingFeed = (props) => {
  // Build an array of Recipe components from the current passed down recipes
  // Set isFav based on if the current recipe is in the user Favorite recipes array
  const recipeComponents = props.favoriteRecipes.map((recipe) => {
    return (
      <Recipe
        key={recipe.title}
        image={recipe.image}
        title={recipe.title}
        id={recipe.id}
        isFav={true}
        // updateFavoriteIDs={props.updateFavoriteIDs}
      />
    );
  });

  return (
    <div>
      {/* Display Recipe Search results in an @mui ImageList */}
      <ImageList>
        {recipeComponents}
      </ImageList>
    </div>
  );
}

export default LandingFeed;