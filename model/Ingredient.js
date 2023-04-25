/*
 * Denver DeBoer
 * Model for an ingredient
 * Holds an array of strings cooresponding to user ingredients list
*/

//Parameter is an array of user provided ingredients
class Ingredient {
    constructor(ingredients) {
        if(ingredients) {
            this.id = "myList"
            this.list = ingredients
        }
    }
}

module.exports = Ingredient