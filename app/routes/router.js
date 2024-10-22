//Import express package
const express = require('express');

const router = express.Router();

router.use('/allergens', require('./api/allergenroutes'));
router.use('/items', require('./api/itemroutes'));
router.use('/ingredients', require('./api/ingroutes'));
router.use('/item_allergen', require('./api/itemallergenroutes'));
router.use('/item_ingredient', require('./api/itemingroutes'));

module.exports = router;