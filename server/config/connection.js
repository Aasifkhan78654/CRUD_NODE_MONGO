const mongoose = require('mongoose');
/**Establish Connection */
mongoose.connect('mongodb://localhost:27017/test');

module.exports = mongoose;