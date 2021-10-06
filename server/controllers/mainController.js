const axios = require('axios');
const Recipe = require('../models/RecipeModel');
const apiKeyAsParam = `apiKey=${process.env.API_KEY}`;
//This is only needed for testing. We import some JSON that mimicks response of the spoonacular api
const fs = require('fs');
const path = require('path');
const searchRecipeResponse = JSON.parse(fs.readFileSync(path.join(__dirname, './testResponses/searchRecipe.json')));
const getMoreRecipeInfoResponse = JSON.parse(fs.readFileSync(path.join(__dirname, './testResponses/getMoreRecipeInfo.json')));

const mainController = {};

mainController.searchRecipe = async (req, res, next) => {
  // connect to API to find recipes matching a query
  /*res.locals.recipes = searchRecipeResponse;
  next();*/
  try {
    const OPTIONS = {
      ranking: 2, // ranking 2: orders by least missing ingredients
      ignorePantry: true, // ignorePantry true: ignores common pantry items like water, flour, sugar, etc.
    };

    const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients';
    const ingredientsAsParams =
      'ingredients=' + Object.keys(req.user.ingredients).join(',+');
    const optionsAsParams = new URLSearchParams(OPTIONS).toString();

    axios.get(`${baseUrl}?${ingredientsAsParams}&${optionsAsParams}&${apiKeyAsParam}`)
    .then(response => {
      res.locals.recipes = response.data
      return next();
    })
    .catch(err => {
      throw err
    })
  } catch (err) {
    return next({
      log: `mainController.searchRecipes ERROR: ${err}`,
    });
  }
};

mainController.getMoreRecipeInfo = async (req, res, next) => {
  /*res.locals.instructions = getMoreRecipeInfoResponse;
  next();*/
  try {
    const baseUrl = `https://api.spoonacular.com/recipes/${req.params.id}/information`;
    axios.get(`${baseUrl}?${apiKeyAsParam}`)
    .then(response => {
      res.locals.instructions = response.data;
      return next();
    })
    .catch(err => {
      throw err;
    })
  } catch (err) {
    return next({
      log: `mainController.getMoreRecipeInfo ERROR: ${err}`,
    });
  }
};

// return all ingredients in the user's inventory
mainController.fetchIngredients = (req, res, next) => {
  res.locals.ingredients = req.user.ingredients;
  next();
};

// update user's ingredients inventory
mainController.updateIngredients = async (req, res, next) => {
  try {
    const { ingredient, quantity } = req.body;
    req.user.ingredients[ingredient] = +quantity;
    res.locals.ingredients = req.user.ingredients;
    req.user.markModified('ingredients'); // changes wont save without this
    await req.user.save();
    next();
  } catch (err) {
    return next({
      log: `mainController.updateIngredients ERROR: ${err}`,
    });
  }
};

// get the favorites from the fav history
mainController.getFavorites = (req, res, next) => {
  try {
    //If we are asking for id's only, return an array of the favorite recipe ID's
    if(req.query.id){
      res.locals.favorites = req.user.favorites;
      return next();
    }
    
    //query our recipe cache to return all recipe's with ID's from our user's favorited list
    Recipe.find({'recipeId': {
      $in: req.user.favorites
    }
    }).exec()
    .then(async data => {
      //Check if data contains all of the favorites in the user's favorited list. If not we must add those recipe's to data
      for(let i = 0; i < req.user.favorites.length; i++){
        let found = data.some(el => {
          return el.recipeId == req.user.favorites[i];
        })
        //If one of the user's favorited ID's are not in the data array, get the recipe from the API and add it to data so it is returned in our request.
        if(!found){
          console.log('recipe not found in cached recipes')
          const baseUrl = `https://api.spoonacular.com/recipes/${req.user.favorites[i]}/information`;
          const recipeFromAPI = await axios.get(`${baseUrl}?${apiKeyAsParam}`);
          data.push(recipeFromAPI.data);
        }
      }
      res.locals.favorites = data;
      return next();
    }).catch(err => {
      throw err
    })
  } catch (error) {
    return next({
      log: `mainController.getFavorites ERROR: ${error}`
    })
  }
};

// update the favorites array
mainController.addFavorite = async (req, res, next) => {
  req.user.favorites.push(req.body.favorite);
  req.user.markModified('favorites');
  await req.user.save();
  res.locals.favorites = req.user.favorites;
  next();
};

mainController.removeFavorite = async (req, res, next) => {
  req.user.favorites = req.user.favorites.filter((fav) => {return fav !== req.body.favorite});
  req.user.markModified('favorites');
  await req.user.save();
  res.locals.favorites = req.user.favorites;
  next();
};

// TODO: get recently viewed recipes
mainController.getRecents = (req, res, next) => {
  next();
};

module.exports = mainController;
