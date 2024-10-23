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

    PostMenuItem(req, res)
    {
        //Reads key names from the requested information
        let fields = Object.keys(req.body);
        //Reads values from the requested information
        let values = Object.values(req.body);

        let sql = `INSERT INTO items (${fields.join(',')}) VALUES (${Array(values.length).fill('?').join(',')})`;

        pool.query(sql, values, (err, rows) =>
        {
            console.log(rows)
            res.send("data sent")
        })
    }
}

module.exports = ItemsDao;