//IMPORTING OUR RESTAURANT CLASS FROM THE DAO
const daoClass = require('../../dao/itemallergendao');

//Making a new object class from the "restdao" class template
const dao = new daoClass();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
{
    dao.findAll(req, res);
})

module.exports = router;