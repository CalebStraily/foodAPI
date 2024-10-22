//IMPORTING OUR PACKAGES to run on this file.
const express = require('express');

const app = express();
const port = 4001;
const router = require('./app/routes/router');

app.listen(port, () =>
{
    console.log(`App is running on port ${port}`);
})

app.use('/api', router);