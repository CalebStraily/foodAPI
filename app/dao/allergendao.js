//IMPORT OUR MYSQL "pool" variable connection
const pool = require('../config/dbconfig');

class AllergenDao
{
    constructor() 
    {
        this.pool = pool;
    }

    findAll(req, res)
    {
        pool.query('SELECT * from allergens', (err, rows) => 
        {
            console.log(rows);
            res.send(rows);
        })
    }
}

module.exports = AllergenDao;