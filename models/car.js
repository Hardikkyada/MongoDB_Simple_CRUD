const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    car_id:String,
    name:String,
    rent:String,
    company:String,
    adv_booking: [{type:String}],
    status: Boolean
});

const car = mongoose.model('cars', userSchema, 'cars');

module.exports = car;