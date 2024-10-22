//IMPORT OUR MYSQL "pool" variable connection
const pool = require('../config/dbconfig');

class ItemIng
{
    constructor() 
    {
        this.pool = pool;
    }

    findAll(req, res)
    {
        pool.query('SELECT items.name as item_id, ingredients.name as ing_id FROM item_ingredient INNER JOIN items on item_ingredient.item_id = items.id INNER JOIN ingredients on item_ingredient.ing_id = ingredients.id;', (err, rows) => 
        {
            console.log(rows);
            res.send(rows);
        })
    }
}

module.exports = ItemIng;