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
            //Genreate table to store MyList
            this.db.run('CREATE TABLE UserList (id INTEGER PRIMARY KEY, ingred TEXT NOT NULL);')
        })
    }

    //Retrieve MyList from database
    static getMyList() {
        return new Promise((resolve, _reject) => {
            this.db.all('SELECT * FROM UserList', (err, response) => {
                resolve(response.map((item) => new Ingredient(item)))
            })
        })
    }

    //Retrieve a single ingredient from MyList
    //NOT SURE IF NEEDED
    static getIngred(id) {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * from UserList where id = ?', [id], (err, rows) => {
                if(rows.length >= 1)
                    resolve(new Ingredient(rows[0]))
                else
                    reject('ID: ' + id + " not found")
            })
        })
    }

    //Add ingredient to MyList
    static addIngred(ingredient) {
        let newIngred = new Ingredient(ingredient)
        return new Promise((resolve, _reject) => {
            this.db.run('INSERT INTO UserList (ingred) VALUES (?)', [newIngred.name],
            function(_err, _data) {
                newIngred.id = this.lastID
                resolve(newIngred)
            })
        })
    }

    //Delete ingredient from MyList
    static deleteIngred(ingredient) {
        this.db.run('DELETE FROM UserList WHERE id=?', [ingredient.id],
        function(_err, _data) {
            return
        })
    }
}

recipeDB.db = new splite3.Database('../recipe.sqlite')
module.exports = recipeDB