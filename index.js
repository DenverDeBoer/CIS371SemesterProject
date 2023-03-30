/*
 * Denver DeBoer
 * Index file for Slice or Dice
 * Will be used to create and run the web server
 * Will handle acceptable web paths
*/

//Import express module
const express = require('express')

//Instantiate server and use port 3000
const app = express()
const port = 3000
app.set('view engine', 'ejs')

//Display main page
app.get('/recipeMain', (req, res) => {
    res.render('/views/recipeMain')
})

//Display details page
app.get('/recipeDetails', (req, res) => {
    res.render('/views/recipeDetails')
})

//Display myList page
app.get('/recipeList', (req, res) => {
    res.render('/views/recipeList')
})

//Display search page
app.get('/recipeSearch', (req, res) => {
    res.render('/views/recipeSearch')
})

//Launch the server
app.listen(port, () => console.log("SLICEorDICE on port: " + port))