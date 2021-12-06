const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    rent_id:String,
    car_id: String,
    customer_id: String,
    strat_date: String,
    end_date: String,
    payment_satus: String
});

const carrent = mongoose.model('rent', userSchema, 'rent');

module.exports = carrent;