const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const mainController = {};

mainController.searchRecipe = async (req, res, next) => {
  // connect to API to find recipes matching a query
  res.locals.recipes = [
    {
        "id": 991625,
        "title": "Nutella Buttercream Cupcakes with Hidden Cadbury Egg",
        "image": "https://spoonacular.com/recipeImages/991625-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 2050,
                "amount": 1,
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp",
                "aisle": "Baking",
                "name": "vanilla",
                "original": "1 tsp of vanilla,",
                "originalString": "1 tsp of vanilla,",
                "originalName": "vanilla",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 4,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "4 eggs",
                "originalString": "4 eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 1077,
                "amount": 1,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "1 cup of milk,",
                "originalString": "1 cup of milk,",
                "originalName": "milk",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            }
        ],
        "likes": 14
    },
    {
        "id": 641890,
        "title": "Easy Cheesy Scrambled Eggs",
        "image": "https://spoonacular.com/recipeImages/641890-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 1001025,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Cheese",
                "name": "jack cheese",
                "original": "1/2 cup shredded jack cheese",
                "originalString": "1/2 cup shredded jack cheese",
                "originalName": "shredded jack cheese",
                "metaInformation": [
                    "shredded"
                ],
                "meta": [
                    "shredded"
                ],
                "extendedName": "shredded jack cheese",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheese-white.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 8,
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "8 large eggs",
                "originalString": "8 large eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 1077,
                "amount": 0.25,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "1/4 cup milk or cream",
                "originalString": "1/4 cup milk or cream",
                "originalName": "milk or cream",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            }
        ],
        "likes": 3
    },
    {
        "id": 635964,
        "title": "Bread Omlette",
        "image": "https://spoonacular.com/recipeImages/635964-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 18079,
                "amount": 1,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Pasta and Rice",
                "name": "bread crumbs",
                "original": "1 cup Fresh bread crumbs",
                "originalString": "1 cup Fresh bread crumbs",
                "originalName": "Fresh bread crumbs",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "extendedName": "fresh bread crumbs",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 4,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "4 Eggs",
                "originalString": "4 Eggs",
                "originalName": "Eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 1077,
                "amount": 1,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "1 cup Boiled milk",
                "originalString": "1 cup Boiled milk",
                "originalName": "Boiled milk",
                "metaInformation": [
                    "boiled"
                ],
                "meta": [
                    "boiled"
                ],
                "extendedName": "cooked milk",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            }
        ],
        "likes": 1
    },
    {
        "id": 633574,
        "title": "Baked Custard",
        "image": "https://spoonacular.com/recipeImages/633574-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 2050,
                "amount": 0.5,
                "unit": "teaspoon",
                "unitLong": "teaspoons",
                "unitShort": "tsp",
                "aisle": "Baking",
                "name": "vanilla",
                "original": "1/2 teaspoon vanilla",
                "originalString": "1/2 teaspoon vanilla",
                "originalName": "vanilla",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 4,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "4 eggs",
                "originalString": "4 eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 1077,
                "amount": 2,
                "unit": "cups",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "2 cups milk, scalded",
                "originalString": "2 cups milk, scalded",
                "originalName": "milk, scalded",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            }
        ],
        "likes": 1
    },
    {
        "id": 636458,
        "title": "Bunny Eggs Kids Breakfast",
        "image": "https://spoonacular.com/recipeImages/636458-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 9050,
                "amount": 12,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "blueberries",
                "original": "12 fresh blueberries",
                "originalString": "12 fresh blueberries",
                "originalName": "fresh blueberries",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "extendedName": "fresh blueberries",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg"
            },
            {
                "id": 1009,
                "amount": 2,
                "unit": "large slices",
                "unitLong": "large slices",
                "unitShort": "large slices",
                "aisle": "Cheese",
                "name": "mild cheddar cheese",
                "original": "2 large slices mild cheddar cheese, cut into thin strips",
                "originalString": "2 large slices mild cheddar cheese, cut into thin strips",
                "originalName": "mild cheddar cheese, cut into thin strips",
                "metaInformation": [
                    "cut into thin strips"
                ],
                "meta": [
                    "cut into thin strips"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 10123,
                "amount": 12,
                "unit": "slices",
                "unitLong": "slices",
                "unitShort": "slice",
                "aisle": "Meat",
                "name": "bacon",
                "original": "12 slices bacon",
                "originalString": "12 slices bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            },
            {
                "id": 1123,
                "amount": 2,
                "unit": "extra large",
                "unitLong": "extra larges",
                "unitShort": "extra large",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "2 extra large eggs",
                "originalString": "2 extra large eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 1077,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "milk",
                "originalString": "milk",
                "originalName": "milk",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "likes": 1
    },
    {
        "id": 662665,
        "title": "Swiss Bircher Muesli",
        "image": "https://spoonacular.com/recipeImages/662665-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 42184,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Cereal",
                "name": "muesli",
                "original": "1/2 cup muesli",
                "originalString": "1/2 cup muesli",
                "originalName": "muesli",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/granola.jpg"
            },
            {
                "id": 43261,
                "amount": 3,
                "unit": "tablespoons",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "skim vanilla yoghurt",
                "original": "3 tablespoons of plain or vanilla yoghurt",
                "originalString": "3 tablespoons of plain or vanilla yoghurt",
                "originalName": "plain or vanilla yoghurt",
                "metaInformation": [
                    "plain"
                ],
                "meta": [
                    "plain"
                ],
                "extendedName": "plain skim vanilla yoghurt",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-yogurt.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "apple",
                "original": "1 Apple",
                "originalString": "1 Apple",
                "originalName": "Apple",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 1077,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "1/2 cup of Milk",
                "originalString": "1/2 cup of Milk",
                "originalName": "Milk",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 1123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "eggs",
                "originalString": "eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            }
        ],
        "likes": 1
    },
    {
        "id": 664327,
        "title": "Vanilla Panna Cotta with Chocolate Ganache",
        "image": "https://spoonacular.com/recipeImages/664327-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 19177,
                "amount": 3,
                "unit": "sheets",
                "unitLong": "sheets",
                "unitShort": "sheets",
                "aisle": "Baking",
                "name": "gelatin",
                "original": "3 sheets of gelatin",
                "originalString": "3 sheets of gelatin",
                "originalName": "gelatin",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/gelatin-powder.jpg"
            },
            {
                "id": 93622,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Baking",
                "name": "vanilla bean",
                "original": "1 vanilla bean",
                "originalString": "1 vanilla bean",
                "originalName": "vanilla bean",
                "metaInformation": [],
                "meta": [],
                "extendedName": "vanilla bean bean",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1077,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "1/2 cup milk or 120 ml",
                "originalString": "1/2 cup milk or 120 ml",
                "originalName": "milk or 120 ml",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 1123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "eggs",
                "originalString": "eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            }
        ],
        "likes": 7
    },
    {
        "id": 631807,
        "title": "Toasted\" Agnolotti (or Ravioli)",
        "image": "https://spoonacular.com/recipeImages/631807-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 93832,
                "amount": 13,
                "unit": "oz",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Refrigerated;Frozen",
                "name": "ravioli",
                "original": "1/3 packet of 375g (13 oz) pre-made fresh agnolotti/ravioli",
                "originalString": "1/3 packet of 375g (13 oz) pre-made fresh agnolotti/ravioli",
                "originalName": "1/3 packet of 375g pre-made fresh agnolotti/ravioli",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "extendedName": "fresh ravioli",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/ravioli.png"
            },
            {
                "id": 18079,
                "amount": 1.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Pasta and Rice",
                "name": "breadcrumbs",
                "original": "1.5 cup breadcrumbs",
                "originalString": "1.5 cup breadcrumbs",
                "originalName": "breadcrumbs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "egg",
                "original": "1 egg",
                "originalString": "1 egg",
                "originalName": "egg",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            },
            {
                "id": 1077,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "milk",
                "originalString": "milk",
                "originalName": "milk",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "likes": 7
    },
    {
        "id": 659581,
        "title": "Scotch Eggs",
        "image": "https://spoonacular.com/recipeImages/659581-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 7063,
                "amount": 1,
                "unit": "pound",
                "unitLong": "pound",
                "unitShort": "lb",
                "aisle": "Meat",
                "name": "bulk sausage",
                "original": "1 pound bulk sausage",
                "originalString": "1 pound bulk sausage",
                "originalName": "bulk sausage",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/meat-ground.jpg"
            },
            {
                "id": 35137,
                "amount": 1,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Ethnic Foods;Baking",
                "name": "corn meal",
                "original": "1 cup bread crumbs or corn meal",
                "originalString": "1 cup bread crumbs or corn meal",
                "originalName": "bread crumbs or corn meal",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cornmeal.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 9,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "9 eggs",
                "originalString": "9 eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 10123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Meat",
                "name": "bacon",
                "original": "bacon",
                "originalString": "bacon",
                "originalName": "bacon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            },
            {
                "id": 1077,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "milk",
                "originalString": "milk",
                "originalName": "milk",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "likes": 2
    },
    {
        "id": 644958,
        "title": "Goat Cheese Stuffed Bacon Wrapped Jalapeno Appetizer",
        "image": "https://spoonacular.com/recipeImages/644958-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 1159,
                "amount": 3,
                "unit": "ounces",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Cheese",
                "name": "goat cheese",
                "original": "3 ounces Goat cheese",
                "originalString": "3 ounces Goat cheese",
                "originalName": "Goat cheese",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
            },
            {
                "id": 11979,
                "amount": 6,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Canned and Jarred;Produce;Ethnic Foods",
                "name": "jalapenos",
                "original": "6 jalapenos",
                "originalString": "6 jalapenos",
                "originalName": "jalapenos",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 10123,
                "amount": 6,
                "unit": "slices",
                "unitLong": "slices",
                "unitShort": "slice",
                "aisle": "Meat",
                "name": "bacon",
                "original": "6 slices thick sliced bacon",
                "originalString": "6 slices thick sliced bacon",
                "originalName": "thick sliced bacon",
                "metaInformation": [
                    "thick",
                    "sliced"
                ],
                "meta": [
                    "thick",
                    "sliced"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
            }
        ],
        "unusedIngredients": [
            {[
              {
                  "id": 991625,
                  "title": "Nutella Buttercream Cupcakes with Hidden Cadbury Egg",
                  "image": "https://spoonacular.com/recipeImages/991625-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 2,
                  "missedIngredientCount": 1,
                  "missedIngredients": [
                      {
                          "id": 2050,
                          "amount": 1,
                          "unit": "tsp",
                          "unitLong": "teaspoon",
                          "unitShort": "tsp",
                          "aisle": "Baking",
                          "name": "vanilla",
                          "original": "1 tsp of vanilla,",
                          "originalString": "1 tsp of vanilla,",
                          "originalName": "vanilla",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 1123,
                          "amount": 4,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "4 eggs",
                          "originalString": "4 eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      },
                      {
                          "id": 1077,
                          "amount": 1,
                          "unit": "cup",
                          "unitLong": "cup",
                          "unitShort": "cup",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "1 cup of milk,",
                          "originalString": "1 cup of milk,",
                          "originalName": "milk",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      }
                  ],
                  "likes": 14
              },
              {
                  "id": 641890,
                  "title": "Easy Cheesy Scrambled Eggs",
                  "image": "https://spoonacular.com/recipeImages/641890-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 2,
                  "missedIngredientCount": 1,
                  "missedIngredients": [
                      {
                          "id": 1001025,
                          "amount": 0.5,
                          "unit": "cup",
                          "unitLong": "cups",
                          "unitShort": "cup",
                          "aisle": "Cheese",
                          "name": "jack cheese",
                          "original": "1/2 cup shredded jack cheese",
                          "originalString": "1/2 cup shredded jack cheese",
                          "originalName": "shredded jack cheese",
                          "metaInformation": [
                              "shredded"
                          ],
                          "meta": [
                              "shredded"
                          ],
                          "extendedName": "shredded jack cheese",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheese-white.jpg"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 1123,
                          "amount": 8,
                          "unit": "large",
                          "unitLong": "larges",
                          "unitShort": "large",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "8 large eggs",
                          "originalString": "8 large eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      },
                      {
                          "id": 1077,
                          "amount": 0.25,
                          "unit": "cup",
                          "unitLong": "cups",
                          "unitShort": "cup",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "1/4 cup milk or cream",
                          "originalString": "1/4 cup milk or cream",
                          "originalName": "milk or cream",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      }
                  ],
                  "likes": 3
              },
              {
                  "id": 635964,
                  "title": "Bread Omlette",
                  "image": "https://spoonacular.com/recipeImages/635964-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 2,
                  "missedIngredientCount": 1,
                  "missedIngredients": [
                      {
                          "id": 18079,
                          "amount": 1,
                          "unit": "cup",
                          "unitLong": "cup",
                          "unitShort": "cup",
                          "aisle": "Pasta and Rice",
                          "name": "bread crumbs",
                          "original": "1 cup Fresh bread crumbs",
                          "originalString": "1 cup Fresh bread crumbs",
                          "originalName": "Fresh bread crumbs",
                          "metaInformation": [
                              "fresh"
                          ],
                          "meta": [
                              "fresh"
                          ],
                          "extendedName": "fresh bread crumbs",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 1123,
                          "amount": 4,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "4 Eggs",
                          "originalString": "4 Eggs",
                          "originalName": "Eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      },
                      {
                          "id": 1077,
                          "amount": 1,
                          "unit": "cup",
                          "unitLong": "cup",
                          "unitShort": "cup",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "1 cup Boiled milk",
                          "originalString": "1 cup Boiled milk",
                          "originalName": "Boiled milk",
                          "metaInformation": [
                              "boiled"
                          ],
                          "meta": [
                              "boiled"
                          ],
                          "extendedName": "cooked milk",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      }
                  ],
                  "likes": 1
              },
              {
                  "id": 633574,
                  "title": "Baked Custard",
                  "image": "https://spoonacular.com/recipeImages/633574-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 2,
                  "missedIngredientCount": 1,
                  "missedIngredients": [
                      {
                          "id": 2050,
                          "amount": 0.5,
                          "unit": "teaspoon",
                          "unitLong": "teaspoons",
                          "unitShort": "tsp",
                          "aisle": "Baking",
                          "name": "vanilla",
                          "original": "1/2 teaspoon vanilla",
                          "originalString": "1/2 teaspoon vanilla",
                          "originalName": "vanilla",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 1123,
                          "amount": 4,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "4 eggs",
                          "originalString": "4 eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      },
                      {
                          "id": 1077,
                          "amount": 2,
                          "unit": "cups",
                          "unitLong": "cups",
                          "unitShort": "cup",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "2 cups milk, scalded",
                          "originalString": "2 cups milk, scalded",
                          "originalName": "milk, scalded",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      }
                  ],
                  "likes": 1
              },
              {
                  "id": 636458,
                  "title": "Bunny Eggs Kids Breakfast",
                  "image": "https://spoonacular.com/recipeImages/636458-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 2,
                  "missedIngredientCount": 2,
                  "missedIngredients": [
                      {
                          "id": 9050,
                          "amount": 12,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Produce",
                          "name": "blueberries",
                          "original": "12 fresh blueberries",
                          "originalString": "12 fresh blueberries",
                          "originalName": "fresh blueberries",
                          "metaInformation": [
                              "fresh"
                          ],
                          "meta": [
                              "fresh"
                          ],
                          "extendedName": "fresh blueberries",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg"
                      },
                      {
                          "id": 1009,
                          "amount": 2,
                          "unit": "large slices",
                          "unitLong": "large slices",
                          "unitShort": "large slices",
                          "aisle": "Cheese",
                          "name": "mild cheddar cheese",
                          "original": "2 large slices mild cheddar cheese, cut into thin strips",
                          "originalString": "2 large slices mild cheddar cheese, cut into thin strips",
                          "originalName": "mild cheddar cheese, cut into thin strips",
                          "metaInformation": [
                              "cut into thin strips"
                          ],
                          "meta": [
                              "cut into thin strips"
                          ],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 10123,
                          "amount": 12,
                          "unit": "slices",
                          "unitLong": "slices",
                          "unitShort": "slice",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "12 slices bacon",
                          "originalString": "12 slices bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      },
                      {
                          "id": 1123,
                          "amount": 2,
                          "unit": "extra large",
                          "unitLong": "extra larges",
                          "unitShort": "extra large",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "2 extra large eggs",
                          "originalString": "2 extra large eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 1077,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "milk",
                          "originalString": "milk",
                          "originalName": "milk",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "likes": 1
              },
              {
                  "id": 662665,
                  "title": "Swiss Bircher Muesli",
                  "image": "https://spoonacular.com/recipeImages/662665-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 2,
                  "missedIngredientCount": 2,
                  "missedIngredients": [
                      {
                          "id": 42184,
                          "amount": 0.5,
                          "unit": "cup",
                          "unitLong": "cups",
                          "unitShort": "cup",
                          "aisle": "Cereal",
                          "name": "muesli",
                          "original": "1/2 cup muesli",
                          "originalString": "1/2 cup muesli",
                          "originalName": "muesli",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/granola.jpg"
                      },
                      {
                          "id": 43261,
                          "amount": 3,
                          "unit": "tablespoons",
                          "unitLong": "tablespoons",
                          "unitShort": "Tbsp",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "skim vanilla yoghurt",
                          "original": "3 tablespoons of plain or vanilla yoghurt",
                          "originalString": "3 tablespoons of plain or vanilla yoghurt",
                          "originalName": "plain or vanilla yoghurt",
                          "metaInformation": [
                              "plain"
                          ],
                          "meta": [
                              "plain"
                          ],
                          "extendedName": "plain skim vanilla yoghurt",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-yogurt.png"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Produce",
                          "name": "apple",
                          "original": "1 Apple",
                          "originalString": "1 Apple",
                          "originalName": "Apple",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 1077,
                          "amount": 0.5,
                          "unit": "cup",
                          "unitLong": "cups",
                          "unitShort": "cup",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "1/2 cup of Milk",
                          "originalString": "1/2 cup of Milk",
                          "originalName": "Milk",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 1123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "eggs",
                          "originalString": "eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      }
                  ],
                  "likes": 1
              },
              {
                  "id": 664327,
                  "title": "Vanilla Panna Cotta with Chocolate Ganache",
                  "image": "https://spoonacular.com/recipeImages/664327-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 1,
                  "missedIngredientCount": 2,
                  "missedIngredients": [
                      {
                          "id": 19177,
                          "amount": 3,
                          "unit": "sheets",
                          "unitLong": "sheets",
                          "unitShort": "sheets",
                          "aisle": "Baking",
                          "name": "gelatin",
                          "original": "3 sheets of gelatin",
                          "originalString": "3 sheets of gelatin",
                          "originalName": "gelatin",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/gelatin-powder.jpg"
                      },
                      {
                          "id": 93622,
                          "amount": 1,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Baking",
                          "name": "vanilla bean",
                          "original": "1 vanilla bean",
                          "originalString": "1 vanilla bean",
                          "originalName": "vanilla bean",
                          "metaInformation": [],
                          "meta": [],
                          "extendedName": "vanilla bean bean",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 1077,
                          "amount": 0.5,
                          "unit": "cup",
                          "unitLong": "cups",
                          "unitShort": "cup",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "1/2 cup milk or 120 ml",
                          "originalString": "1/2 cup milk or 120 ml",
                          "originalName": "milk or 120 ml",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 1123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "eggs",
                          "originalString": "eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      }
                  ],
                  "likes": 7
              },
              {
                  "id": 631807,
                  "title": "Toasted\" Agnolotti (or Ravioli)",
                  "image": "https://spoonacular.com/recipeImages/631807-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 1,
                  "missedIngredientCount": 2,
                  "missedIngredients": [
                      {
                          "id": 93832,
                          "amount": 13,
                          "unit": "oz",
                          "unitLong": "ounces",
                          "unitShort": "oz",
                          "aisle": "Refrigerated;Frozen",
                          "name": "ravioli",
                          "original": "1/3 packet of 375g (13 oz) pre-made fresh agnolotti/ravioli",
                          "originalString": "1/3 packet of 375g (13 oz) pre-made fresh agnolotti/ravioli",
                          "originalName": "1/3 packet of 375g pre-made fresh agnolotti/ravioli",
                          "metaInformation": [
                              "fresh"
                          ],
                          "meta": [
                              "fresh"
                          ],
                          "extendedName": "fresh ravioli",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/ravioli.png"
                      },
                      {
                          "id": 18079,
                          "amount": 1.5,
                          "unit": "cup",
                          "unitLong": "cups",
                          "unitShort": "cup",
                          "aisle": "Pasta and Rice",
                          "name": "breadcrumbs",
                          "original": "1.5 cup breadcrumbs",
                          "originalString": "1.5 cup breadcrumbs",
                          "originalName": "breadcrumbs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 1123,
                          "amount": 1,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "egg",
                          "original": "1 egg",
                          "originalString": "1 egg",
                          "originalName": "egg",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      },
                      {
                          "id": 1077,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "milk",
                          "originalString": "milk",
                          "originalName": "milk",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "likes": 7
              },
              {
                  "id": 659581,
                  "title": "Scotch Eggs",
                  "image": "https://spoonacular.com/recipeImages/659581-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 1,
                  "missedIngredientCount": 2,
                  "missedIngredients": [
                      {
                          "id": 7063,
                          "amount": 1,
                          "unit": "pound",
                          "unitLong": "pound",
                          "unitShort": "lb",
                          "aisle": "Meat",
                          "name": "bulk sausage",
                          "original": "1 pound bulk sausage",
                          "originalString": "1 pound bulk sausage",
                          "originalName": "bulk sausage",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/meat-ground.jpg"
                      },
                      {
                          "id": 35137,
                          "amount": 1,
                          "unit": "cup",
                          "unitLong": "cup",
                          "unitShort": "cup",
                          "aisle": "Ethnic Foods;Baking",
                          "name": "corn meal",
                          "original": "1 cup bread crumbs or corn meal",
                          "originalString": "1 cup bread crumbs or corn meal",
                          "originalName": "bread crumbs or corn meal",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/cornmeal.png"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 1123,
                          "amount": 9,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "9 eggs",
                          "originalString": "9 eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 10123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "bacon",
                          "originalString": "bacon",
                          "originalName": "bacon",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      },
                      {
                          "id": 1077,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "milk",
                          "originalString": "milk",
                          "originalName": "milk",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "likes": 2
              },
              {
                  "id": 644958,
                  "title": "Goat Cheese Stuffed Bacon Wrapped Jalapeno Appetizer",
                  "image": "https://spoonacular.com/recipeImages/644958-312x231.jpg",
                  "imageType": "jpg",
                  "usedIngredientCount": 1,
                  "missedIngredientCount": 2,
                  "missedIngredients": [
                      {
                          "id": 1159,
                          "amount": 3,
                          "unit": "ounces",
                          "unitLong": "ounces",
                          "unitShort": "oz",
                          "aisle": "Cheese",
                          "name": "goat cheese",
                          "original": "3 ounces Goat cheese",
                          "originalString": "3 ounces Goat cheese",
                          "originalName": "Goat cheese",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
                      },
                      {
                          "id": 11979,
                          "amount": 6,
                          "unit": "",
                          "unitLong": "",
                          "unitShort": "",
                          "aisle": "Canned and Jarred;Produce;Ethnic Foods",
                          "name": "jalapenos",
                          "original": "6 jalapenos",
                          "originalString": "6 jalapenos",
                          "originalName": "jalapenos",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png"
                      }
                  ],
                  "usedIngredients": [
                      {
                          "id": 10123,
                          "amount": 6,
                          "unit": "slices",
                          "unitLong": "slices",
                          "unitShort": "slice",
                          "aisle": "Meat",
                          "name": "bacon",
                          "original": "6 slices thick sliced bacon",
                          "originalString": "6 slices thick sliced bacon",
                          "originalName": "thick sliced bacon",
                          "metaInformation": [
                              "thick",
                              "sliced"
                          ],
                          "meta": [
                              "thick",
                              "sliced"
                          ],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                      }
                  ],
                  "unusedIngredients": [
                      {
                          "id": 9003,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Produce",
                          "name": "apples",
                          "original": "apples",
                          "originalString": "apples",
                          "originalName": "apples",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                      },
                      {
                          "id": 1123,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "eggs",
                          "original": "eggs",
                          "originalString": "eggs",
                          "originalName": "eggs",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                      },
                      {
                          "id": 1077,
                          "amount": 1,
                          "unit": "serving",
                          "unitLong": "serving",
                          "unitShort": "serving",
                          "aisle": "Milk, Eggs, Other Dairy",
                          "name": "milk",
                          "original": "milk",
                          "originalString": "milk",
                          "originalName": "milk",
                          "metaInformation": [],
                          "meta": [],
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                      }
                  ],
                  "likes": 1
              }
          ][
            {
                "id": 991625,
                "title": "Nutella Buttercream Cupcakes with Hidden Cadbury Egg",
                "image": "https://spoonacular.com/recipeImages/991625-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 2,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 2050,
                        "amount": 1,
                        "unit": "tsp",
                        "unitLong": "teaspoon",
                        "unitShort": "tsp",
                        "aisle": "Baking",
                        "name": "vanilla",
                        "original": "1 tsp of vanilla,",
                        "originalString": "1 tsp of vanilla,",
                        "originalName": "vanilla",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1123,
                        "amount": 4,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "4 eggs",
                        "originalString": "4 eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    },
                    {
                        "id": 1077,
                        "amount": 1,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1 cup of milk,",
                        "originalString": "1 cup of milk,",
                        "originalName": "milk",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    }
                ],
                "likes": 14
            },
            {
                "id": 641890,
                "title": "Easy Cheesy Scrambled Eggs",
                "image": "https://spoonacular.com/recipeImages/641890-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 2,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 1001025,
                        "amount": 0.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Cheese",
                        "name": "jack cheese",
                        "original": "1/2 cup shredded jack cheese",
                        "originalString": "1/2 cup shredded jack cheese",
                        "originalName": "shredded jack cheese",
                        "metaInformation": [
                            "shredded"
                        ],
                        "meta": [
                            "shredded"
                        ],
                        "extendedName": "shredded jack cheese",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheese-white.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1123,
                        "amount": 8,
                        "unit": "large",
                        "unitLong": "larges",
                        "unitShort": "large",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "8 large eggs",
                        "originalString": "8 large eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    },
                    {
                        "id": 1077,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1/4 cup milk or cream",
                        "originalString": "1/4 cup milk or cream",
                        "originalName": "milk or cream",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    }
                ],
                "likes": 3
            },
            {
                "id": 635964,
                "title": "Bread Omlette",
                "image": "https://spoonacular.com/recipeImages/635964-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 2,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 18079,
                        "amount": 1,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice",
                        "name": "bread crumbs",
                        "original": "1 cup Fresh bread crumbs",
                        "originalString": "1 cup Fresh bread crumbs",
                        "originalName": "Fresh bread crumbs",
                        "metaInformation": [
                            "fresh"
                        ],
                        "meta": [
                            "fresh"
                        ],
                        "extendedName": "fresh bread crumbs",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1123,
                        "amount": 4,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "4 Eggs",
                        "originalString": "4 Eggs",
                        "originalName": "Eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    },
                    {
                        "id": 1077,
                        "amount": 1,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1 cup Boiled milk",
                        "originalString": "1 cup Boiled milk",
                        "originalName": "Boiled milk",
                        "metaInformation": [
                            "boiled"
                        ],
                        "meta": [
                            "boiled"
                        ],
                        "extendedName": "cooked milk",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    }
                ],
                "likes": 1
            },
            {
                "id": 633574,
                "title": "Baked Custard",
                "image": "https://spoonacular.com/recipeImages/633574-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 2,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 2050,
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "unitLong": "teaspoons",
                        "unitShort": "tsp",
                        "aisle": "Baking",
                        "name": "vanilla",
                        "original": "1/2 teaspoon vanilla",
                        "originalString": "1/2 teaspoon vanilla",
                        "originalName": "vanilla",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1123,
                        "amount": 4,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "4 eggs",
                        "originalString": "4 eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    },
                    {
                        "id": 1077,
                        "amount": 2,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "2 cups milk, scalded",
                        "originalString": "2 cups milk, scalded",
                        "originalName": "milk, scalded",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    }
                ],
                "likes": 1
            },
            {
                "id": 636458,
                "title": "Bunny Eggs Kids Breakfast",
                "image": "https://spoonacular.com/recipeImages/636458-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 2,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 9050,
                        "amount": 12,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "blueberries",
                        "original": "12 fresh blueberries",
                        "originalString": "12 fresh blueberries",
                        "originalName": "fresh blueberries",
                        "metaInformation": [
                            "fresh"
                        ],
                        "meta": [
                            "fresh"
                        ],
                        "extendedName": "fresh blueberries",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg"
                    },
                    {
                        "id": 1009,
                        "amount": 2,
                        "unit": "large slices",
                        "unitLong": "large slices",
                        "unitShort": "large slices",
                        "aisle": "Cheese",
                        "name": "mild cheddar cheese",
                        "original": "2 large slices mild cheddar cheese, cut into thin strips",
                        "originalString": "2 large slices mild cheddar cheese, cut into thin strips",
                        "originalName": "mild cheddar cheese, cut into thin strips",
                        "metaInformation": [
                            "cut into thin strips"
                        ],
                        "meta": [
                            "cut into thin strips"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 10123,
                        "amount": 12,
                        "unit": "slices",
                        "unitLong": "slices",
                        "unitShort": "slice",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "12 slices bacon",
                        "originalString": "12 slices bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    },
                    {
                        "id": 1123,
                        "amount": 2,
                        "unit": "extra large",
                        "unitLong": "extra larges",
                        "unitShort": "extra large",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "2 extra large eggs",
                        "originalString": "2 extra large eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 1077,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "milk",
                        "originalString": "milk",
                        "originalName": "milk",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "likes": 1
            },
            {
                "id": 662665,
                "title": "Swiss Bircher Muesli",
                "image": "https://spoonacular.com/recipeImages/662665-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 2,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 42184,
                        "amount": 0.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Cereal",
                        "name": "muesli",
                        "original": "1/2 cup muesli",
                        "originalString": "1/2 cup muesli",
                        "originalName": "muesli",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/granola.jpg"
                    },
                    {
                        "id": 43261,
                        "amount": 3,
                        "unit": "tablespoons",
                        "unitLong": "tablespoons",
                        "unitShort": "Tbsp",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "skim vanilla yoghurt",
                        "original": "3 tablespoons of plain or vanilla yoghurt",
                        "originalString": "3 tablespoons of plain or vanilla yoghurt",
                        "originalName": "plain or vanilla yoghurt",
                        "metaInformation": [
                            "plain"
                        ],
                        "meta": [
                            "plain"
                        ],
                        "extendedName": "plain skim vanilla yoghurt",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla-yogurt.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Produce",
                        "name": "apple",
                        "original": "1 Apple",
                        "originalString": "1 Apple",
                        "originalName": "Apple",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 1077,
                        "amount": 0.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1/2 cup of Milk",
                        "originalString": "1/2 cup of Milk",
                        "originalName": "Milk",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 1123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "eggs",
                        "originalString": "eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    }
                ],
                "likes": 1
            },
            {
                "id": 664327,
                "title": "Vanilla Panna Cotta with Chocolate Ganache",
                "image": "https://spoonacular.com/recipeImages/664327-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 19177,
                        "amount": 3,
                        "unit": "sheets",
                        "unitLong": "sheets",
                        "unitShort": "sheets",
                        "aisle": "Baking",
                        "name": "gelatin",
                        "original": "3 sheets of gelatin",
                        "originalString": "3 sheets of gelatin",
                        "originalName": "gelatin",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/gelatin-powder.jpg"
                    },
                    {
                        "id": 93622,
                        "amount": 1,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Baking",
                        "name": "vanilla bean",
                        "original": "1 vanilla bean",
                        "originalString": "1 vanilla bean",
                        "originalName": "vanilla bean",
                        "metaInformation": [],
                        "meta": [],
                        "extendedName": "vanilla bean bean",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 0.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1/2 cup milk or 120 ml",
                        "originalString": "1/2 cup milk or 120 ml",
                        "originalName": "milk or 120 ml",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 1123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "eggs",
                        "originalString": "eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    }
                ],
                "likes": 7
            },
            {
                "id": 631807,
                "title": "Toasted\" Agnolotti (or Ravioli)",
                "image": "https://spoonacular.com/recipeImages/631807-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 93832,
                        "amount": 13,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Refrigerated;Frozen",
                        "name": "ravioli",
                        "original": "1/3 packet of 375g (13 oz) pre-made fresh agnolotti/ravioli",
                        "originalString": "1/3 packet of 375g (13 oz) pre-made fresh agnolotti/ravioli",
                        "originalName": "1/3 packet of 375g pre-made fresh agnolotti/ravioli",
                        "metaInformation": [
                            "fresh"
                        ],
                        "meta": [
                            "fresh"
                        ],
                        "extendedName": "fresh ravioli",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/ravioli.png"
                    },
                    {
                        "id": 18079,
                        "amount": 1.5,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Pasta and Rice",
                        "name": "breadcrumbs",
                        "original": "1.5 cup breadcrumbs",
                        "originalString": "1.5 cup breadcrumbs",
                        "originalName": "breadcrumbs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1123,
                        "amount": 1,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "egg",
                        "original": "1 egg",
                        "originalString": "1 egg",
                        "originalName": "egg",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    },
                    {
                        "id": 1077,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "milk",
                        "originalString": "milk",
                        "originalName": "milk",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "likes": 7
            },
            {
                "id": 659581,
                "title": "Scotch Eggs",
                "image": "https://spoonacular.com/recipeImages/659581-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 7063,
                        "amount": 1,
                        "unit": "pound",
                        "unitLong": "pound",
                        "unitShort": "lb",
                        "aisle": "Meat",
                        "name": "bulk sausage",
                        "original": "1 pound bulk sausage",
                        "originalString": "1 pound bulk sausage",
                        "originalName": "bulk sausage",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/meat-ground.jpg"
                    },
                    {
                        "id": 35137,
                        "amount": 1,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Ethnic Foods;Baking",
                        "name": "corn meal",
                        "original": "1 cup bread crumbs or corn meal",
                        "originalString": "1 cup bread crumbs or corn meal",
                        "originalName": "bread crumbs or corn meal",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/cornmeal.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1123,
                        "amount": 9,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "9 eggs",
                        "originalString": "9 eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 10123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "bacon",
                        "originalString": "bacon",
                        "originalName": "bacon",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    },
                    {
                        "id": 1077,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "milk",
                        "originalString": "milk",
                        "originalName": "milk",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "likes": 2
            },
            {
                "id": 644958,
                "title": "Goat Cheese Stuffed Bacon Wrapped Jalapeno Appetizer",
                "image": "https://spoonacular.com/recipeImages/644958-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 1159,
                        "amount": 3,
                        "unit": "ounces",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Cheese",
                        "name": "goat cheese",
                        "original": "3 ounces Goat cheese",
                        "originalString": "3 ounces Goat cheese",
                        "originalName": "Goat cheese",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
                    },
                    {
                        "id": 11979,
                        "amount": 6,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Canned and Jarred;Produce;Ethnic Foods",
                        "name": "jalapenos",
                        "original": "6 jalapenos",
                        "originalString": "6 jalapenos",
                        "originalName": "jalapenos",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 10123,
                        "amount": 6,
                        "unit": "slices",
                        "unitLong": "slices",
                        "unitShort": "slice",
                        "aisle": "Meat",
                        "name": "bacon",
                        "original": "6 slices thick sliced bacon",
                        "originalString": "6 slices thick sliced bacon",
                        "originalName": "thick sliced bacon",
                        "metaInformation": [
                            "thick",
                            "sliced"
                        ],
                        "meta": [
                            "thick",
                            "sliced"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                    }
                ],
                "unusedIngredients": [
                    {
                        "id": 9003,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Produce",
                        "name": "apples",
                        "original": "apples",
                        "originalString": "apples",
                        "originalName": "apples",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
                    },
                    {
                        "id": 1123,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "eggs",
                        "original": "eggs",
                        "originalString": "eggs",
                        "originalName": "eggs",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                    },
                    {
                        "id": 1077,
                        "amount": 1,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "milk",
                        "originalString": "milk",
                        "originalName": "milk",
                        "metaInformation": [],
                        "meta": [],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                    }
                ],
                "likes": 1
            }
        ]
                "id": 9003,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "apples",
                "original": "apples",
                "originalString": "apples",
                "originalName": "apples",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 1123,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "eggs",
                "originalString": "eggs",
                "originalName": "eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 1077,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "milk",
                "original": "milk",
                "originalString": "milk",
                "originalName": "milk",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
            }
        ],
        "likes": 1
    }
]
  next();
  /*try {
    const OPTIONS = {
      ranking: 2, // ranking 2 orders by least missing ingredients
      ignorePantry: true, // ignore pantry ignores common pantry items like water, flour, sugar, etc.
    };

    const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients';
    const apiKeyAsParam = `apiKey=${process.env.API_KEY}`;
    const ingredientsAsParams =
      'ingredients=' + Object.keys(req.user.ingredients).join(',+');
    const optionsAsParams = new URLSearchParams(OPTIONS).toString();

    const response = await fetch(
      `${baseUrl}?${apiKeyAsParam}&${ingredientsAsParams}&${optionsAsParams}`
    );
    res.locals.recipes = await response.json();
    next();
  } catch (err) {
    return next({
      log: `mainController.searchRecipes ERROR: ${err}`,
    });
  }*/
};

mainController.getMoreRecipeInfo = async (req, res, next) => {
  res.locals.instructions = {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 7,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 10,
    "cookingMinutes": 25,
    "aggregateLikes": 14,
    "spoonacularScore": 34.0,
    "healthScore": 3.0,
    "creditsText": "Jen West",
    "sourceName": "Pink When",
    "pricePerServing": 54.11,
    "extendedIngredients": [
        {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "solid",
            "name": "eggs",
            "nameClean": "egg",
            "original": "4 eggs",
            "originalString": "4 eggs",
            "originalName": "eggs",
            "amount": 4.0,
            "unit": "",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "solid",
            "name": "eggs",
            "nameClean": "egg",
            "original": "6 Cadbury eggs.",
            "originalString": "6 Cadbury eggs.",
            "originalName": "Cadbury eggs",
            "amount": 6.0,
            "unit": "",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 6.0,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 6.0,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 1077,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "milk.png",
            "consistency": "liquid",
            "name": "milk",
            "nameClean": "milk",
            "original": "1 cup of milk,",
            "originalString": "1 cup of milk,",
            "originalName": "milk",
            "amount": 1.0,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 4582,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "vegetable-oil.jpg",
            "consistency": "liquid",
            "name": "oil",
            "nameClean": "cooking oil",
            "original": "1/3 cup of oil",
            "originalString": "1/3 cup of oil",
            "originalName": "oil",
            "amount": 0.3333333333333333,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 0.333,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 78.863,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 2050,
            "aisle": "Baking",
            "image": "vanilla-extract.jpg",
            "consistency": "liquid",
            "name": "vanilla",
            "nameClean": "vanilla extract",
            "original": "1 tsp of vanilla,",
            "originalString": "1 tsp of vanilla,",
            "originalName": "vanilla",
            "amount": 1.0,
            "unit": "tsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        }
    ],
    "id": 991625,
    "title": "Nutella Buttercream Cupcakes with Hidden Cadbury Egg",
    "readyInMinutes": 35,
    "servings": 6,
    "sourceUrl": "https://www.pinkwhen.com/nutella-buttercream-cupcakes-with-hidden-cadbury-egg/",
    "image": "https://spoonacular.com/recipeImages/991625-556x370.jpg",
    "imageType": "jpg",
    "nutrition": {
        "nutrients": [
            {
                "name": "Calories",
                "title": "Calories",
                "amount": 241.7,
                "unit": "kcal",
                "percentOfDailyNeeds": 12.08
            },
            {
                "name": "Fat",
                "title": "Fat",
                "amount": 20.74,
                "unit": "g",
                "percentOfDailyNeeds": 31.91
            },
            {
                "name": "Saturated Fat",
                "title": "Saturated Fat",
                "amount": 3.97,
                "unit": "g",
                "percentOfDailyNeeds": 24.8
            },
            {
                "name": "Carbohydrates",
                "title": "Carbohydrates",
                "amount": 2.57,
                "unit": "g",
                "percentOfDailyNeeds": 0.86
            },
            {
                "name": "Net Carbohydrates",
                "title": "Net Carbohydrates",
                "amount": 2.57,
                "unit": "g",
                "percentOfDailyNeeds": 0.93
            },
            {
                "name": "Sugar",
                "title": "Sugar",
                "amount": 2.41,
                "unit": "g",
                "percentOfDailyNeeds": 2.68
            },
            {
                "name": "Cholesterol",
                "title": "Cholesterol",
                "amount": 276.87,
                "unit": "mg",
                "percentOfDailyNeeds": 92.29
            },
            {
                "name": "Sodium",
                "title": "Sodium",
                "amount": 121.68,
                "unit": "mg",
                "percentOfDailyNeeds": 5.29
            },
            {
                "name": "Alcohol",
                "title": "Alcohol",
                "amount": 0.24,
                "unit": "g",
                "percentOfDailyNeeds": 1.34
            },
            {
                "name": "Protein",
                "title": "Protein",
                "amount": 10.49,
                "unit": "g",
                "percentOfDailyNeeds": 20.98
            },
            {
                "name": "Selenium",
                "title": "Selenium",
                "amount": 24.02,
                "unit": "µg",
                "percentOfDailyNeeds": 34.31
            },
            {
                "name": "Vitamin B2",
                "title": "Vitamin B2",
                "amount": 0.4,
                "unit": "mg",
                "percentOfDailyNeeds": 23.8
            },
            {
                "name": "Vitamin E",
                "title": "Vitamin E",
                "amount": 2.97,
                "unit": "mg",
                "percentOfDailyNeeds": 19.81
            },
            {
                "name": "Phosphorus",
                "title": "Phosphorus",
                "amount": 179.4,
                "unit": "mg",
                "percentOfDailyNeeds": 17.94
            },
            {
                "name": "Vitamin B12",
                "title": "Vitamin B12",
                "amount": 0.84,
                "unit": "µg",
                "percentOfDailyNeeds": 13.93
            },
            {
                "name": "Vitamin D",
                "title": "Vitamin D",
                "amount": 2.0,
                "unit": "µg",
                "percentOfDailyNeeds": 13.3
            },
            {
                "name": "Vitamin B5",
                "title": "Vitamin B5",
                "amount": 1.28,
                "unit": "mg",
                "percentOfDailyNeeds": 12.76
            },
            {
                "name": "Vitamin A",
                "title": "Vitamin A",
                "amount": 461.88,
                "unit": "IU",
                "percentOfDailyNeeds": 9.24
            },
            {
                "name": "Folate",
                "title": "Folate",
                "amount": 36.5,
                "unit": "µg",
                "percentOfDailyNeeds": 9.13
            },
            {
                "name": "Vitamin K",
                "title": "Vitamin K",
                "amount": 9.21,
                "unit": "µg",
                "percentOfDailyNeeds": 8.78
            },
            {
                "name": "Calcium",
                "title": "Calcium",
                "amount": 87.1,
                "unit": "mg",
                "percentOfDailyNeeds": 8.71
            },
            {
                "name": "Zinc",
                "title": "Zinc",
                "amount": 1.1,
                "unit": "mg",
                "percentOfDailyNeeds": 7.31
            },
            {
                "name": "Iron",
                "title": "Iron",
                "amount": 1.3,
                "unit": "mg",
                "percentOfDailyNeeds": 7.2
            },
            {
                "name": "Vitamin B6",
                "title": "Vitamin B6",
                "amount": 0.14,
                "unit": "mg",
                "percentOfDailyNeeds": 6.97
            },
            {
                "name": "Potassium",
                "title": "Potassium",
                "amount": 155.92,
                "unit": "mg",
                "percentOfDailyNeeds": 4.45
            },
            {
                "name": "Magnesium",
                "title": "Magnesium",
                "amount": 12.95,
                "unit": "mg",
                "percentOfDailyNeeds": 3.24
            },
            {
                "name": "Vitamin B1",
                "title": "Vitamin B1",
                "amount": 0.05,
                "unit": "mg",
                "percentOfDailyNeeds": 3.21
            },
            {
                "name": "Copper",
                "title": "Copper",
                "amount": 0.06,
                "unit": "mg",
                "percentOfDailyNeeds": 3.17
            },
            {
                "name": "Manganese",
                "title": "Manganese",
                "amount": 0.02,
                "unit": "mg",
                "percentOfDailyNeeds": 1.19
            }
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "title": "Glycemic Index",
                "amount": 6.33,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "title": "Glycemic Load",
                "amount": 0.74,
                "unit": ""
            }
        ],
        "flavonoids": [
            {
                "name": "Cyanidin",
                "title": "Cyanidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Petunidin",
                "title": "Petunidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Delphinidin",
                "title": "Delphinidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Malvidin",
                "title": "Malvidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Pelargonidin",
                "title": "Pelargonidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Peonidin",
                "title": "Peonidin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Catechin",
                "title": "Catechin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epigallocatechin",
                "title": "Epigallocatechin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epicatechin",
                "title": "Epicatechin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epicatechin 3-gallate",
                "title": "Epicatechin 3-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Epigallocatechin 3-gallate",
                "title": "Epigallocatechin 3-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Theaflavin",
                "title": "Theaflavin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Thearubigins",
                "title": "Thearubigins",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Eriodictyol",
                "title": "Eriodictyol",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Hesperetin",
                "title": "Hesperetin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Naringenin",
                "title": "Naringenin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Apigenin",
                "title": "Apigenin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Luteolin",
                "title": "Luteolin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Isorhamnetin",
                "title": "Isorhamnetin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Kaempferol",
                "title": "Kaempferol",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Myricetin",
                "title": "Myricetin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Quercetin",
                "title": "Quercetin",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3,3'-digallate",
                "title": "Theaflavin-3,3'-digallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3'-gallate",
                "title": "Theaflavin-3'-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Theaflavin-3-gallate",
                "title": "Theaflavin-3-gallate",
                "amount": 0.0,
                "unit": ""
            },
            {
                "name": "Gallocatechin",
                "title": "Gallocatechin",
                "amount": 0.0,
                "unit": ""
            }
        ],
        "ingredients": [
            {
                "id": 1123,
                "name": "eggs",
                "amount": 0.67,
                "unit": "",
                "nutrients": [
                    {
                        "title": "Vitamin B3",
                        "name": "Vitamin B3",
                        "amount": 0.02,
                        "unit": "mg"
                    },
                    {
                        "title": "Caffeine",
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Zinc",
                        "name": "Zinc",
                        "amount": 0.38,
                        "unit": "mg"
                    },
                    {
                        "title": "Fat",
                        "name": "Fat",
                        "amount": 2.79,
                        "unit": "g"
                    },
                    {
                        "title": "Saturated Fat",
                        "name": "Saturated Fat",
                        "amount": 0.92,
                        "unit": "g"
                    },
                    {
                        "title": "Selenium",
                        "name": "Selenium",
                        "amount": 9.01,
                        "unit": "µg"
                    },
                    {
                        "title": "Potassium",
                        "name": "Potassium",
                        "amount": 40.48,
                        "unit": "mg"
                    },
                    {
                        "title": "Alcohol",
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Manganese",
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg"
                    },
                    {
                        "title": "Iron",
                        "name": "Iron",
                        "amount": 0.51,
                        "unit": "mg"
                    },
                    {
                        "title": "Mono Unsaturated Fat",
                        "name": "Mono Unsaturated Fat",
                        "amount": 1.07,
                        "unit": "g"
                    },
                    {
                        "title": "Copper",
                        "name": "Copper",
                        "amount": 0.02,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B2",
                        "name": "Vitamin B2",
                        "amount": 0.13,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B5",
                        "name": "Vitamin B5",
                        "amount": 0.45,
                        "unit": "mg"
                    },
                    {
                        "title": "Protein",
                        "name": "Protein",
                        "amount": 3.68,
                        "unit": "g"
                    },
                    {
                        "title": "Carbohydrates",
                        "name": "Carbohydrates",
                        "amount": 0.21,
                        "unit": "g"
                    },
                    {
                        "title": "Phosphorus",
                        "name": "Phosphorus",
                        "amount": 58.08,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B6",
                        "name": "Vitamin B6",
                        "amount": 0.05,
                        "unit": "mg"
                    },
                    {
                        "title": "Cholesterol",
                        "name": "Cholesterol",
                        "amount": 109.12,
                        "unit": "mg"
                    },
                    {
                        "title": "Sugar",
                        "name": "Sugar",
                        "amount": 0.11,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin K",
                        "name": "Vitamin K",
                        "amount": 0.09,
                        "unit": "µg"
                    },
                    {
                        "title": "Calories",
                        "name": "Calories",
                        "amount": 41.95,
                        "unit": "kcal"
                    },
                    {
                        "title": "Choline",
                        "name": "Choline",
                        "amount": 86.18,
                        "unit": "mg"
                    },
                    {
                        "title": "Sodium",
                        "name": "Sodium",
                        "amount": 41.65,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin C",
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Poly Unsaturated Fat",
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.56,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin A",
                        "name": "Vitamin A",
                        "amount": 158.4,
                        "unit": "IU"
                    },
                    {
                        "title": "Vitamin B1",
                        "name": "Vitamin B1",
                        "amount": 0.01,
                        "unit": "mg"
                    },
                    {
                        "title": "Folic Acid",
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Fluoride",
                        "name": "Fluoride",
                        "amount": 0.32,
                        "unit": "mg"
                    },
                    {
                        "title": "Trans Fat",
                        "name": "Trans Fat",
                        "amount": 0.01,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin E",
                        "name": "Vitamin E",
                        "amount": 0.31,
                        "unit": "mg"
                    },
                    {
                        "title": "Magnesium",
                        "name": "Magnesium",
                        "amount": 3.52,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin D",
                        "name": "Vitamin D",
                        "amount": 0.59,
                        "unit": "µg"
                    },
                    {
                        "title": "Net Carbohydrates",
                        "name": "Net Carbohydrates",
                        "amount": 0.21,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin B12",
                        "name": "Vitamin B12",
                        "amount": 0.26,
                        "unit": "µg"
                    },
                    {
                        "title": "Folate",
                        "name": "Folate",
                        "amount": 13.79,
                        "unit": "µg"
                    },
                    {
                        "title": "Fiber",
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Calcium",
                        "name": "Calcium",
                        "amount": 16.43,
                        "unit": "mg"
                    }
                ]
            },
            {
                "id": 1123,
                "name": "eggs",
                "amount": 1.0,
                "unit": "",
                "nutrients": [
                    {
                        "title": "Vitamin B3",
                        "name": "Vitamin B3",
                        "amount": 0.03,
                        "unit": "mg"
                    },
                    {
                        "title": "Caffeine",
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Zinc",
                        "name": "Zinc",
                        "amount": 0.57,
                        "unit": "mg"
                    },
                    {
                        "title": "Fat",
                        "name": "Fat",
                        "amount": 4.18,
                        "unit": "g"
                    },
                    {
                        "title": "Saturated Fat",
                        "name": "Saturated Fat",
                        "amount": 1.38,
                        "unit": "g"
                    },
                    {
                        "title": "Selenium",
                        "name": "Selenium",
                        "amount": 13.51,
                        "unit": "µg"
                    },
                    {
                        "title": "Potassium",
                        "name": "Potassium",
                        "amount": 60.72,
                        "unit": "mg"
                    },
                    {
                        "title": "Alcohol",
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Manganese",
                        "name": "Manganese",
                        "amount": 0.01,
                        "unit": "mg"
                    },
                    {
                        "title": "Iron",
                        "name": "Iron",
                        "amount": 0.77,
                        "unit": "mg"
                    },
                    {
                        "title": "Mono Unsaturated Fat",
                        "name": "Mono Unsaturated Fat",
                        "amount": 1.61,
                        "unit": "g"
                    },
                    {
                        "title": "Copper",
                        "name": "Copper",
                        "amount": 0.03,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B2",
                        "name": "Vitamin B2",
                        "amount": 0.2,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B5",
                        "name": "Vitamin B5",
                        "amount": 0.67,
                        "unit": "mg"
                    },
                    {
                        "title": "Protein",
                        "name": "Protein",
                        "amount": 5.53,
                        "unit": "g"
                    },
                    {
                        "title": "Carbohydrates",
                        "name": "Carbohydrates",
                        "amount": 0.32,
                        "unit": "g"
                    },
                    {
                        "title": "Phosphorus",
                        "name": "Phosphorus",
                        "amount": 87.12,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B6",
                        "name": "Vitamin B6",
                        "amount": 0.07,
                        "unit": "mg"
                    },
                    {
                        "title": "Cholesterol",
                        "name": "Cholesterol",
                        "amount": 163.68,
                        "unit": "mg"
                    },
                    {
                        "title": "Sugar",
                        "name": "Sugar",
                        "amount": 0.16,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin K",
                        "name": "Vitamin K",
                        "amount": 0.13,
                        "unit": "µg"
                    },
                    {
                        "title": "Calories",
                        "name": "Calories",
                        "amount": 62.92,
                        "unit": "kcal"
                    },
                    {
                        "title": "Choline",
                        "name": "Choline",
                        "amount": 129.27,
                        "unit": "mg"
                    },
                    {
                        "title": "Sodium",
                        "name": "Sodium",
                        "amount": 62.48,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin C",
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Poly Unsaturated Fat",
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.84,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin A",
                        "name": "Vitamin A",
                        "amount": 237.6,
                        "unit": "IU"
                    },
                    {
                        "title": "Vitamin B1",
                        "name": "Vitamin B1",
                        "amount": 0.02,
                        "unit": "mg"
                    },
                    {
                        "title": "Folic Acid",
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Fluoride",
                        "name": "Fluoride",
                        "amount": 0.48,
                        "unit": "mg"
                    },
                    {
                        "title": "Trans Fat",
                        "name": "Trans Fat",
                        "amount": 0.02,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin E",
                        "name": "Vitamin E",
                        "amount": 0.46,
                        "unit": "mg"
                    },
                    {
                        "title": "Magnesium",
                        "name": "Magnesium",
                        "amount": 5.28,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin D",
                        "name": "Vitamin D",
                        "amount": 0.88,
                        "unit": "µg"
                    },
                    {
                        "title": "Net Carbohydrates",
                        "name": "Net Carbohydrates",
                        "amount": 0.32,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin B12",
                        "name": "Vitamin B12",
                        "amount": 0.39,
                        "unit": "µg"
                    },
                    {
                        "title": "Folate",
                        "name": "Folate",
                        "amount": 20.68,
                        "unit": "µg"
                    },
                    {
                        "title": "Fiber",
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Calcium",
                        "name": "Calcium",
                        "amount": 24.64,
                        "unit": "mg"
                    }
                ]
            },
            {
                "id": 1077,
                "name": "milk",
                "amount": 0.17,
                "unit": "cup",
                "nutrients": [
                    {
                        "title": "Vitamin B3",
                        "name": "Vitamin B3",
                        "amount": 0.04,
                        "unit": "mg"
                    },
                    {
                        "title": "Caffeine",
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Zinc",
                        "name": "Zinc",
                        "amount": 0.15,
                        "unit": "mg"
                    },
                    {
                        "title": "Fat",
                        "name": "Fat",
                        "amount": 1.32,
                        "unit": "g"
                    },
                    {
                        "title": "Saturated Fat",
                        "name": "Saturated Fat",
                        "amount": 0.76,
                        "unit": "g"
                    },
                    {
                        "title": "Selenium",
                        "name": "Selenium",
                        "amount": 1.5,
                        "unit": "µg"
                    },
                    {
                        "title": "Potassium",
                        "name": "Potassium",
                        "amount": 53.68,
                        "unit": "mg"
                    },
                    {
                        "title": "Alcohol",
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Manganese",
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Iron",
                        "name": "Iron",
                        "amount": 0.01,
                        "unit": "mg"
                    },
                    {
                        "title": "Mono Unsaturated Fat",
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.33,
                        "unit": "g"
                    },
                    {
                        "title": "Copper",
                        "name": "Copper",
                        "amount": 0.01,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B2",
                        "name": "Vitamin B2",
                        "amount": 0.07,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B5",
                        "name": "Vitamin B5",
                        "amount": 0.15,
                        "unit": "mg"
                    },
                    {
                        "title": "Protein",
                        "name": "Protein",
                        "amount": 1.28,
                        "unit": "g"
                    },
                    {
                        "title": "Carbohydrates",
                        "name": "Carbohydrates",
                        "amount": 1.95,
                        "unit": "g"
                    },
                    {
                        "title": "Phosphorus",
                        "name": "Phosphorus",
                        "amount": 34.16,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B6",
                        "name": "Vitamin B6",
                        "amount": 0.01,
                        "unit": "mg"
                    },
                    {
                        "title": "Cholesterol",
                        "name": "Cholesterol",
                        "amount": 4.07,
                        "unit": "mg"
                    },
                    {
                        "title": "Sugar",
                        "name": "Sugar",
                        "amount": 2.05,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin K",
                        "name": "Vitamin K",
                        "amount": 0.12,
                        "unit": "µg"
                    },
                    {
                        "title": "Calories",
                        "name": "Calories",
                        "amount": 24.81,
                        "unit": "kcal"
                    },
                    {
                        "title": "Choline",
                        "name": "Choline",
                        "amount": 5.82,
                        "unit": "mg"
                    },
                    {
                        "title": "Sodium",
                        "name": "Sodium",
                        "amount": 17.49,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin C",
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Poly Unsaturated Fat",
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.08,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin A",
                        "name": "Vitamin A",
                        "amount": 65.88,
                        "unit": "IU"
                    },
                    {
                        "title": "Vitamin B1",
                        "name": "Vitamin B1",
                        "amount": 0.02,
                        "unit": "mg"
                    },
                    {
                        "title": "Folic Acid",
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Vitamin E",
                        "name": "Vitamin E",
                        "amount": 0.03,
                        "unit": "mg"
                    },
                    {
                        "title": "Magnesium",
                        "name": "Magnesium",
                        "amount": 4.07,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin D",
                        "name": "Vitamin D",
                        "amount": 0.53,
                        "unit": "µg"
                    },
                    {
                        "title": "Net Carbohydrates",
                        "name": "Net Carbohydrates",
                        "amount": 1.95,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin B12",
                        "name": "Vitamin B12",
                        "amount": 0.18,
                        "unit": "µg"
                    },
                    {
                        "title": "Folate",
                        "name": "Folate",
                        "amount": 2.03,
                        "unit": "µg"
                    },
                    {
                        "title": "Fiber",
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Calcium",
                        "name": "Calcium",
                        "amount": 45.95,
                        "unit": "mg"
                    }
                ]
            },
            {
                "id": 4582,
                "name": "oil",
                "amount": 0.06,
                "unit": "cup",
                "nutrients": [
                    {
                        "title": "Vitamin B3",
                        "name": "Vitamin B3",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Caffeine",
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Zinc",
                        "name": "Zinc",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Fat",
                        "name": "Fat",
                        "amount": 12.44,
                        "unit": "g"
                    },
                    {
                        "title": "Saturated Fat",
                        "name": "Saturated Fat",
                        "amount": 0.92,
                        "unit": "g"
                    },
                    {
                        "title": "Selenium",
                        "name": "Selenium",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Potassium",
                        "name": "Potassium",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Alcohol",
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Manganese",
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Iron",
                        "name": "Iron",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Mono Unsaturated Fat",
                        "name": "Mono Unsaturated Fat",
                        "amount": 7.87,
                        "unit": "g"
                    },
                    {
                        "title": "Copper",
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B2",
                        "name": "Vitamin B2",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B5",
                        "name": "Vitamin B5",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Protein",
                        "name": "Protein",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Carbohydrates",
                        "name": "Carbohydrates",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Phosphorus",
                        "name": "Phosphorus",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B6",
                        "name": "Vitamin B6",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Cholesterol",
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Sugar",
                        "name": "Sugar",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin K",
                        "name": "Vitamin K",
                        "amount": 8.87,
                        "unit": "µg"
                    },
                    {
                        "title": "Calories",
                        "name": "Calories",
                        "amount": 110.01,
                        "unit": "kcal"
                    },
                    {
                        "title": "Choline",
                        "name": "Choline",
                        "amount": 0.02,
                        "unit": "mg"
                    },
                    {
                        "title": "Sodium",
                        "name": "Sodium",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin C",
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Poly Unsaturated Fat",
                        "name": "Poly Unsaturated Fat",
                        "amount": 3.5,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin A",
                        "name": "Vitamin A",
                        "amount": 0.0,
                        "unit": "IU"
                    },
                    {
                        "title": "Vitamin B1",
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Folic Acid",
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Trans Fat",
                        "name": "Trans Fat",
                        "amount": 0.05,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin E",
                        "name": "Vitamin E",
                        "amount": 2.17,
                        "unit": "mg"
                    },
                    {
                        "title": "Magnesium",
                        "name": "Magnesium",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin D",
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Net Carbohydrates",
                        "name": "Net Carbohydrates",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin B12",
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Folate",
                        "name": "Folate",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Fiber",
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Calcium",
                        "name": "Calcium",
                        "amount": 0.0,
                        "unit": "mg"
                    }
                ]
            },
            {
                "id": 2050,
                "name": "vanilla",
                "amount": 0.17,
                "unit": "tsp",
                "nutrients": [
                    {
                        "title": "Vitamin B3",
                        "name": "Vitamin B3",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Caffeine",
                        "name": "Caffeine",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Zinc",
                        "name": "Zinc",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Fat",
                        "name": "Fat",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Saturated Fat",
                        "name": "Saturated Fat",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Selenium",
                        "name": "Selenium",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Potassium",
                        "name": "Potassium",
                        "amount": 1.04,
                        "unit": "mg"
                    },
                    {
                        "title": "Alcohol",
                        "name": "Alcohol",
                        "amount": 0.24,
                        "unit": "g"
                    },
                    {
                        "title": "Manganese",
                        "name": "Manganese",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Iron",
                        "name": "Iron",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Mono Unsaturated Fat",
                        "name": "Mono Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Copper",
                        "name": "Copper",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B2",
                        "name": "Vitamin B2",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B5",
                        "name": "Vitamin B5",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Protein",
                        "name": "Protein",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Carbohydrates",
                        "name": "Carbohydrates",
                        "amount": 0.09,
                        "unit": "g"
                    },
                    {
                        "title": "Phosphorus",
                        "name": "Phosphorus",
                        "amount": 0.04,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin B6",
                        "name": "Vitamin B6",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Cholesterol",
                        "name": "Cholesterol",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Sugar",
                        "name": "Sugar",
                        "amount": 0.09,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin K",
                        "name": "Vitamin K",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Calories",
                        "name": "Calories",
                        "amount": 2.02,
                        "unit": "kcal"
                    },
                    {
                        "title": "Sodium",
                        "name": "Sodium",
                        "amount": 0.06,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin C",
                        "name": "Vitamin C",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Poly Unsaturated Fat",
                        "name": "Poly Unsaturated Fat",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin A",
                        "name": "Vitamin A",
                        "amount": 0.0,
                        "unit": "IU"
                    },
                    {
                        "title": "Vitamin B1",
                        "name": "Vitamin B1",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Folic Acid",
                        "name": "Folic Acid",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Vitamin E",
                        "name": "Vitamin E",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "title": "Magnesium",
                        "name": "Magnesium",
                        "amount": 0.08,
                        "unit": "mg"
                    },
                    {
                        "title": "Vitamin D",
                        "name": "Vitamin D",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Net Carbohydrates",
                        "name": "Net Carbohydrates",
                        "amount": 0.09,
                        "unit": "g"
                    },
                    {
                        "title": "Vitamin B12",
                        "name": "Vitamin B12",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Folate",
                        "name": "Folate",
                        "amount": 0.0,
                        "unit": "µg"
                    },
                    {
                        "title": "Fiber",
                        "name": "Fiber",
                        "amount": 0.0,
                        "unit": "g"
                    },
                    {
                        "title": "Calcium",
                        "name": "Calcium",
                        "amount": 0.08,
                        "unit": "mg"
                    }
                ]
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 17.57,
            "percentFat": 78.13,
            "percentCarbs": 4.3
        },
        "weightPerServing": {
            "amount": 127,
            "unit": "g"
        }
    },
    "summary": "Nutella Buttercream Cupcakes with Hidden Cadbury Egg could be just the <b>gluten free and lacto ovo vegetarian</b> recipe you've been looking for. This recipe makes 6 servings with <b>242 calories</b>, <b>10g of protein</b>, and <b>21g of fat</b> each. For <b>54 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. A few people made this recipe, and 14 would say it hit the spot. If you have milk, eggs, oil, and a few other ingredients on hand, you can make it. This recipe is typical of American cuisine. From preparation to the plate, this recipe takes approximately <b>35 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>good spoonacular score of 73%</b>. <a href=\"https://spoonacular.com/recipes/egg-nog-hazelnut-cupcakes-with-nutella-buttercream-frosting-63942\">Egg Nog-hazelnut Cupcakes With Nutella Buttercream Frosting</a>, <a href=\"https://spoonacular.com/recipes/cadbury-creme-egg-cupcakes-554644\">Cadbury Creme Egg Cupcakes</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-cupcakes-with-nutella-buttercream-591461\">Chocolate Cupcakes with Nutella Buttercream</a> are very similar to this recipe.",
    "cuisines": [
        "American"
    ],
    "dishTypes": [
        "side dish"
    ],
    "diets": [
        "gluten free",
        "lacto ovo vegetarian"
    ],
    "occasions": [],
    "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
    },
    "instructions": "Preheat oven to 350 degrees.\nGrease 6 jumbo muffin tin.\nCombine cake mix milk, vanilla and oil. Mix till combined.\nAdd eggs beat till mixed well. Bake for 18- 21 min\nAfter cooking cupcakes use a spoon and cut out enough area to insert Cadbury egg.\nMaking sure the smaller part of the egg is facing up.\nFrost the cupcake hiding the Cadbury egg.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Preheat oven to 350 degrees.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Grease 6 jumbo muffin tin.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404671,
                            "name": "muffin tray",
                            "localizedName": "muffin tray",
                            "image": "muffin-tray.jpg"
                        }
                    ]
                },
                {
                    "number": 3,
                    "step": "Combine cake mix milk, vanilla and oil.",
                    "ingredients": [
                        {
                            "id": 10018137,
                            "name": "cake mix",
                            "localizedName": "cake mix",
                            "image": ""
                        },
                        {
                            "id": 1052050,
                            "name": "vanilla",
                            "localizedName": "vanilla",
                            "image": "vanilla.jpg"
                        },
                        {
                            "id": 1077,
                            "name": "milk",
                            "localizedName": "milk",
                            "image": "milk.png"
                        },
                        {
                            "id": 4582,
                            "name": "cooking oil",
                            "localizedName": "cooking oil",
                            "image": "vegetable-oil.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 4,
                    "step": "Mix till combined.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Add eggs beat till mixed well.",
                    "ingredients": [
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 6,
                    "step": "Bake for 18- 21 min",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        }
                    ]
                },
                {
                    "number": 7,
                    "step": "After cooking cupcakes use a spoon and cut out enough area to insert Cadbury egg.",
                    "ingredients": [
                        {
                            "id": 18139,
                            "name": "cupcakes",
                            "localizedName": "cupcakes",
                            "image": "plain-cupcake.jpg"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 8,
                    "step": "Making sure the smaller part of the egg is facing up.",
                    "ingredients": [
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 9,
                    "step": "Frost the cupcake hiding the Cadbury egg.",
                    "ingredients": [
                        {
                            "id": 18139,
                            "name": "cupcakes",
                            "localizedName": "cupcakes",
                            "image": "plain-cupcake.jpg"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/nutella-buttercream-cupcakes-with-hidden-cadbury-egg-991625"
}
  next();
  /*try {
    const baseUrl = `https://api.spoonacular.com/recipes/${req.params.id}/information`;
    const apiKeyAsParam = `apiKey=${process.env.API_KEY}`;
    const response = await fetch(`${baseUrl}?${apiKeyAsParam}`);
    res.locals.instructions = await response.json();
    next();
  } catch (err) {
    return next({
      log: `mainController.getMoreRecipeInfo ERROR: ${err}`,
    });
  }*/
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
