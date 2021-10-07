const axios = require('axios');
const url = require('url');
const Recipe = require('./models/RecipeModel')
const Cache = require('./models/CacheModel')
axios.interceptors.response.use(
    handleSuccess, 
    handleError
  );

async function handleSuccess(response){
    let requestedUrl = url.parse(response.config.url, true);
    if(requestedUrl.host == 'api.spoonacular.com' && !response.fromCache){
        if(requestedUrl.pathname == '/recipes/findByIngredients'){
            let filter = {endpoint: requestedUrl.href}
            let update = {data: response.data}
            let cachedRequest = await Cache.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true,
                rawResult: true
            });
            console.log(cachedRequest.value instanceof Cache);
            console.log(cachedRequest.lastErrorObject.updatedExisting);
            for(let i = 0; i < response.data.length; i++){
                const val = response.data[i];
                let filter = {recipeId: val.id.toString()}
                let foundRecipe = await Recipe.findOne(filter).exec();
                if(foundRecipe){
                    foundRecipe.recipe = Object.assign(foundRecipe.recipe, val);
                    foundRecipe.fromEndpoints.push(requestedUrl.pathname);
                    await foundRecipe.save();
                }else{
                    await Recipe.create({
                        recipeId: val.id,
                        recipe: val,
                        fromEndpoints: [requestedUrl.pathname]
                    });
                }
            }

            //Next endpoint
        }else if(requestedUrl.pathname.match(/\/recipes\/.*\/information/)){
            const recipeId = requestedUrl.pathname.match(/\/recipes\/(.*)\/information/)[1];
            const filter = {recipeId: recipeId};
            const recipe = await Recipe.findOne(filter).exec();
            if(recipe){
                const update = {recipe: Object.assign(recipe.recipe, response.data), fromEndpoints: recipe.fromEndpoints.concat(requestedUrl.pathname)}
                await Recipe.findOneAndUpdate(filter, update)
            }else{
                await Recipe.create({
                    recipeId: recipeId,
                    recipe: response.data,
                    fromEndpoints: [requestedUrl.pathname]
                });
            }
        }
    }
    return response
}

function handleError(error) {
    console.log("ERROR IN INTERCEPTOR");
    return Promise.reject(error);
}
