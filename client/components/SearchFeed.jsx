import React from "react";
import Recipe from "./Recipe";

// mui components
import { ImageList } from "@mui/material";

const SearchFeed = (props) => {
  // Build an array of Recipe components from the current passed down recipes
  // Set isFav based on if the current recipe is in the user Favorite recipes array
  const recipeComponents = props.recipes.map((recipe) => {
    const isFav = props.favoriteIDs.includes(recipe.id)
    return (
      <Recipe
        key={recipe.title}
        image={recipe.image}
        title={recipe.title}
        id={recipe.id}
        isFav={isFav}
        updateFavoriteIDs={props.updateFavoriteIDs}
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

export default SearchFeed;