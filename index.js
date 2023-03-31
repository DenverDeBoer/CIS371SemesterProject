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
    res.render('recipeMain')
})

//Display details page
app.get('/recipeDetails', (req, res) => {
    res.render('recipeDetails')
})

//Display myList page
app.get('/recipeList', (req, res) => {
    res.render('recipeList')
})

//Display search page
app.get('/recipeSearch', (req, res) => {
    res.render('recipeSearch')
})

//Launch the server
app.listen(port, () => console.log("SLICEorDICE on port: " + port))