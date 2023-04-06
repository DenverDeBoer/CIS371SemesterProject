/*
 * Denver DeBoer
 * Model for an ingredient
 * Consists of a unique ID and a name
*/

class Ingredient {
    constructor(ingredient) {
        if(ingredient) {
            this.id = ingredient.id
            this.name = ingredient.name
        }
    }
}

module.exports = Ingredient