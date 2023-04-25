/*
 * Denver DeBoer
 * Controller for Slice OR Dice
 * Used for determining which page to render
 * Also sends data from user to database
*/
const ingredient = require('../model/Ingredient')
const recipeDB = require('../db/recipeDB')
const apiRecipe = require('../api/recipeAPI')

//Utilize standard CRUD operations
class recipeController {
    //Return the main page
    async index(req, res) {
        res.render('../views/recipeMain')
    }

    //Display specific recipe details
    //TODO: isolate uniqueness from API call and link
    async showRecipe(req, res) {
        res.render('../views/recipeDetails', {recipeData: req.body})
    }

    //Display MyList page for user ingredients
    async showList(req, res) {
        let myList = await recipeDB.getMyList()
        res.render('../views/recipeList', {uList: myList})
    }

    //Display recipe search page
    async search(req, res) {
        let myList = await recipeDB.getMyList()
        res.render('../views/recipeSearch', {uList: myList})
    }

    //Send updated myList to DB for storage
    async update(req, res) {
        recipeDB.updateList(req.body.mylist)
        this.search(req, res)
    }

    //Send API request
    //MYLIST array -> req.body.myList.split(",")
    //API array -> results.hits[i].recipe.ingredientLines
    async request(req, res) {
        let results = await apiRecipe.searchName(req.body.textBoxName)      //Retrieve API results for recipe name
        if(req.body.inputChoice === "checked") {                            //Check if user is using MyList
            let mlArray = req.body.myList.split(",")                        //Retrieve user's list if ingredients
            for(let i = 0; i < results.hits.length; i++) {                  //Loop through API recipe results
                let rArray = results.hits[i].recipe.ingredientLines         //Retrieve API recipe ingredient list
                if(req.body.filter === "all") {                             //Check if user is using entire MyList
                    let test = mlArray.every(x => rArray.includes(x))       //Tests if every element of MyList is in API list
                    if(!test) {
                        results.hits.splice(i,1)                            //If an ingredient is missing, remove recipe from list
                    }
                }
                else if(req.body.filter === "some") {                       //Check if user is using partial MyList
                    let test = mlArray.some(x => rArray.includes(x))        //Test if some ingredients in MyList appear in API list
                    if(!test) {
                        results.hits.splice(i,1)                            //If no matches, remove recipe from list
                    }
                }
            }
        }
        res.render('../views/recipeMain', {data: results})
    }
}

module.exports = recipeController