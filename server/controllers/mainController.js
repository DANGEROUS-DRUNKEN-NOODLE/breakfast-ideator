const axios = require('axios');

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
    const apiKeyAsParam = `apiKey=${process.env.API_KEY}`;
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
    const apiKeyAsParam = `apiKey=${process.env.API_KEY}`;
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
  res.locals.favorites = req.user.favorites;
  next();
};

// update the favorites array
mainController.addFavorite = async (req, res, next) => {
  req.user.favorites.push(req.body.favorite);
  await req.user.save();
  res.locals.favorites = req.user.favorites;
  next();
};

mainController.removeFavorite = async (req, res, next) => {
  req.user.favorites = req.user.favorites.filter(
    (fav) => fav !== req.body.favorite
  );
  await req.user.save();
  res.locals.favorites = req.user.favorites;
  next();
};

// TODO: get recently viewed recipes
mainController.getRecents = (req, res, next) => {
  next();
};

module.exports = mainController;
