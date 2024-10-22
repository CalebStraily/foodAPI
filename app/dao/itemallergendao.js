//IMPORT OUR MYSQL "pool" variable connection
const pool = require('../config/dbconfig');

class ItemAllergen
{
    constructor() 
    {
        this.pool = pool;
    }

    findAll(req, res)
    {
        pool.query('select items.name as item_id, allergens.name as allergen_id FROM item_allergen INNER JOIN items on item_allergen.item_id = items.id INNER JOIN allergens on item_allergen.allergen_id = allergens.id;', (err, rows) => 
        {
            console.log(rows);
            res.send(rows);
        })
    }
}

module.exports = ItemAllergen;