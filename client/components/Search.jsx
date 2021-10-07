import React from "react";
import { Link } from "react-router-dom";

// mui components
import { Button } from "@mui/material";

const Search = (props) => {
  
  return (
    <div>
      <Link to="/search/feed">
        <Button variant="contained" onClick={()=> props.getRecipes()}>
            Find recipes
        </Button>
      </Link>
    </div>
  );
}

export default Search;