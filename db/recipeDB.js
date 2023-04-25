/*
 * Devner DeBoer
 * Database for recipes
 * Will hold user's custom list of ingredients
 * Methods:
 * -return all ingredients in list
 * -return single ingredient in list
 * -add ingredient to list
 * -delete ingredient from list
*/

var sqlite3 = require("sqlite3").verbose()
let Ingredient = require('../model/Ingredient')

class recipeDB {
    //Create the DB with tables
    static initialize() {
        this.db.serialize(() => {
            //Genreate table to store MyList if it doesn't already exist
            this.db.run('CREATE TABLE IF NOT EXISTS UserList (id TEXT PRIMARY KEY, ingred BLOB);')
        })
    }

    //Retrieve MyList from database
    static getMyList() {
        return new Promise((resolve, _reject) => {
            this.db.all('SELECT * FROM UserList', (err, response) => {
                resolve(response)
            })
        })
    }

    //UPDATE method that deletes myList table and replaces with new data
    //STORE LIST AS SINGLE ROW IN DB
    static updateList(ingredients) {
        let newList = new Ingredient(ingredients)
        this.db.run('UPDATE UserList SET ingred = ? WHERE id = ?', [newList.list,newList.id])
    }
}

recipeDB.db = new sqlite3.Database('../recipe.sqlite')
recipeDB.initialize()
module.exports = recipeDB