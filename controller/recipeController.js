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
        res.render('../views/recipeList', {list: new ingredient()})
    }

    //Display recipe search page
    async search(req, res) {
        res.render('../views/recipeSearch')
    }

    //Send updated myList to DB for storage
    async update(req, res) {
        recipeDB.updateList(req.body.mylist)
    }
}

module.exports = recipeController