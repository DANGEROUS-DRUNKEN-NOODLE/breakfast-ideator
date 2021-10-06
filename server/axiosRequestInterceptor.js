const axios = require('axios');
const url = require('url');
const Recipe = require('./models/RecipeModel')
const Cache = require('./models/CacheModel')
const defaultAdapter = axios.defaults.adapter;

axios.defaults.adapter = function(config){
    const responseObj = {
        status: 200,
        statusText: 'OK',
        headers: {},
        config: config,
        request: {},
        fromCache: true
    }

    const requestedUrl = url.parse(config.url, true)
    return new Promise(async (resolve, reject) => {
        function fetch(){
            const axiosWithoutAdapter = axios.create(Object.assign(config, { adapter: defaultAdapter }))
            axiosWithoutAdapter.request(config)
                .then(response => {
                resolve(response)
                })
                .catch(error => reject(error))
        }
        
        //Check if our request is to the spoonacular api
        if(requestedUrl.host == 'api.spoonacular.com'){
            //Check which endpoint we are sending the request to
            if(requestedUrl.pathname == '/recipes/findByIngredients'){
                const cachedQuery = await Cache.findOne({endpoint: requestedUrl.href}).exec();
                if(cachedQuery){
                    console.log('RETURNING QUERY FROM CACHE');
                    const responseData = Object.assign(responseObj, {data: cachedQuery.data});
                    resolve(responseData);
                }else{
                    fetch();
                }

            }else if(requestedUrl.pathname.match(/\/recipes\/.*\/information/)){
                const recipeId = requestedUrl.pathname.match(/\/recipes\/(.*)\/information/)[1];
                const cachedRecipe = await Recipe.findOne({recipeId: recipeId}).exec();
                if(cachedRecipe && cachedRecipe.fromEndpoints.includes(requestedUrl.pathname)){
                    const responseData = Object.assign(responseObj, {data: cachedRecipe.recipe});
                    resolve(responseData);
                }else{
                    fetch();
                }


            }else{
                fetch();
            }
        }else{
            fetch()
        }
    })
}
/*axios.interceptors.request.use(
    handleRequest, 
    handleError
  );

function handleRequest(config){
    const requestedUrl = url.parse(config.url, true);
    if(requestedUrl.host == 'api.spoonacular.com'){
        if(requestedUrl.pathName == '/recipes/findByIngredients'){
            const cachedQuery = Cache.findOne({endpoint: requestedUrl.href});
            if(cachedQuery){
                console.log('RETURNING QUERY FROM CACHE');
                return Promise.resolve()
            }
        }
    }

    return config
}

function handleError(error){
    return error
}*/