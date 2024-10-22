//IMPORT OUR MYSQL "pool" variable connection
const pool = require('../config/dbconfig');

class IngredientsDao
{
    constructor() 
    {
        this.pool = pool;
    }

    findAll(req, res)
    {
        pool.query('SELECT * from ingredients', (err, rows) => 
        {
            console.log(rows);
            res.send(rows);
        })
    }
}

module.exports = IngredientsDao;