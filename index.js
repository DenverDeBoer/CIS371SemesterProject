/*
 * Denver DeBoer
 * Index file for Slice or Dice
 * Will be used to create and run the web server
 * Will handle acceptable web paths
*/

//Import express module
const express = require('express')

//Body parser to parse post data
const bodyParser = require('body-parser')

//Create a controller
const RecipeController = require('./controller/recipeController')
const recipeController = new RecipeController()

//Instantiate server and use port 3000
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

//Display main page
app.get('/recipeMain', (req, res) => {
    recipeController.index(req, res)
})

//Post recipeMAIN to update myList
app.post('/recipeMain', (req, res) => {
    console.log(req.body.mylist)
    res.render('./recipeMain')
    //recipeController.update(req, res)
})

//Display details page
app.get('/recipeDetails', (req, res) => {
    recipeController.showRecipe(req, res)
})

//Display myList page
app.get('/recipeList', (req, res) => {
    recipeController.showList(req, res)
})

//Display search page
app.get('/recipeSearch', (req, res) => {
    recipeController.search(req, res)
})

//Launch the server
app.listen(port, () => console.log("SLICEorDICE on port: " + port))