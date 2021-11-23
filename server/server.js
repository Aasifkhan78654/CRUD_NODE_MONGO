const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


const port = 5000
app.listen(port, function() {
    console.log(`listening on ${port}`)
})

app
    .use(bodyParser.json({ limit: "1mb", extended: true }))
    .use(express.urlencoded({ extended: true, limit: "1mb" }))
    .use("/common", require('./routes/common'))

module.exports = app;