import React from "react";

// mui components
import { ImageList } from "@mui/material";

const SearchFeed = (props) => {
  
  return (
    <div>
      {/* Display Recipe Search results in an @mui image list */}
      <ImageList>
        {props.recipes}
      </ImageList>
    </div>
  );
}

export default SearchFeed;