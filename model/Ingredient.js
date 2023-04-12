/*
 * Denver DeBoer
 * Model for an ingredient
 * Holds an array of strings cooresponding to user ingredients list
*/

class Ingredient {
    constructor(ingredient) {
        if(ingredient) {
            this.list = ingredient
        }
    }
    add(ingredient) {
        this.list = ingredient
    }
}

module.exports = Ingredient