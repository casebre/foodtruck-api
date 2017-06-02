import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let foodTruckSchema = new Schema({
    name: String,
    style: String
});

module.exports = mongoose.model('FoodTruck', foodTruckSchema);
