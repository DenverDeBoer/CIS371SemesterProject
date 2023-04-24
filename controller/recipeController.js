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
        console.log("CONTROL: " + req)
        res.render('../views/recipeDetails', {recipeData: req.body.recipeData})
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
    async request(req, res) {
        let results = await apiRecipe.searchName(req.body.textBoxName)
        res.render('../views/recipeMain', {data: results})
    }
}

module.exports = recipeController