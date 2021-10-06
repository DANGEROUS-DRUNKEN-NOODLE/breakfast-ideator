const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

// example: router.get("/page")

router.get('/recipes', mainController.searchRecipe, (req, res) => {
  res.status(200).json(res.locals.recipes);
});

router.get('/recipes/:id', mainController.getMoreRecipeInfo, (req, res) => {
  res.status(200).json(res.locals.instructions);
});

router.get('/ingredients', mainController.fetchIngredients, (req, res) => {
  res.status(200).json(res.locals.ingredients);
});

router.put('/ingredients', mainController.updateIngredients, (req, res) => {
  res.status(200).json(res.locals.ingredients);
});

//TODO: implement favorites on the front-end
router.get('/favorites', mainController.getFavorites, (req, res) => {
  console.log('got favorites')
  res.status(200).json(res.locals.favorites);
});

router.post('/favorites', mainController.addFavorite, (req, res) => {
  res.status(200).json(res.locals.favorites);
});

router.delete('/favorites', mainController.removeFavorite, (req, res) => {
  res.status(200).json(res.locals.favorites);
});

module.exports = router;
