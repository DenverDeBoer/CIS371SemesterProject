/*
 * Denver DeBoer
 * Controller for Slice OR Dice
 * Used for determining which page to render
 * Also sends data from user to database
*/
const ingredient = require('../model/Ingredient')
const recipeDB = require('../db/recipeDB')

//Utilize standard CRUD operations
class recipeController {
    //Return the main page
    async index(req, res) {
        res.render('../views/recipeMain')
    }

    //Display specific recipe details
    //TODO: isolate uniqueness from API call and link
    async showRecipe(req, res) {
        res.render('../views/recipeDetails')
    }

    //Display MyList page for user ingredients
    async showList(req, res) {
        res.render('../views/recipeList')
    }

    //Display recipe search page for API calls
    async search(req, res) {
        res.render('../views/recipeSearch')
    }
}

module.exports = recipeController