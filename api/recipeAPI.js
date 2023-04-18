/*
 * Denver DeBoer
 * Interface file for Edamam API
 * Will have methods for:
 * -creating a URL string used to query the API (returns JSON)
 * -query the API for recipes based on name (string)
 * -query the API for recipes based ingredients (array of strings)
*/

//Required for accessing the API
//API ID: 93b6ea7f
//API Key: d579a7606055c5329149fae116174ee2
const apiID = "93b6ea7f"
const apiKey = "d579a7606055c5329149fae116174ee2"
const apiDomain = "https://api.edamam.com/api/recipes/v2?type=public"
const apiURL = apiDomain + "&app_id=" + apiID + "&app_key=" + apiKey

//Used for sending URL request
const request = require("request")

//Function used to created API URL based on recipe name
function searchName(name) {
    getAPI = apiURL + "&q=" + encodeURI(name)
    request(getAPI, function(error, response, body) {
        let results = JSON.parse(body)
        //Displays list of ingredient info
        //console.log(results.hits[0].recipe.ingredients)
    })
}

searchName("Beef dumplings")