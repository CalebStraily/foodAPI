//IMPORT OUR MYSQL "pool" variable connection
const pool = require('../config/dbconfig');

class ItemsDao
{
    constructor() 
    {
        this.pool = pool;
    }

    findAll(req, res)
    {
        pool.query('SELECT * from items', (err, rows) => 
        {
            console.log(rows);
            res.send(rows);
        })
    }
}

module.exports = ItemsDao;