const mongoose = require('../config/connection');
let collectionSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    about: String,
    dob: Date,
}, { timestamps: true });
let collectionName = "User";
module.exports = { collectionSchema, collectionName };