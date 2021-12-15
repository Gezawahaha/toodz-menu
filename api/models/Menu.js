const mongoose = require("mongoose")

const MenuSchema = new mongoose.Schema({
    menutitle: {type:String, required:true, unique:true},
    categories: {type:String, required:true},
    price: {type: Number, default: 0},
    desc: {type:String, required:true},
    stock: {type:Boolean, default: false},
    qty: {type: Number, default: 0},
    pic: {type:String, default: ""},

    //SAW DATA
    priceScore: {type: Number, default: 0},
    spicinessScore: {type: Number, default: 0},
    saltinessScore: {type: Number, default: 0},
    sweetnessScore: {type: Number, default: 0},
    calorieScore: {type: Number, default: 0},
    sourScore: {type: Number, default: 0},
    },{timestamps: true }
);

module.exports = mongoose.model("Menu", MenuSchema);