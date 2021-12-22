const mongoose = require("mongoose")

const MenuSchema = new mongoose.Schema({
    menutitle: {type:String, required:true},
    categories: {type:String, required:true},
    price: {type: Number, default: 0},
    desc: {type:String, default:""},
    stock: {type:Boolean, default: false},
    qty: {type: Number, default: 0},
    pic: {type:String, default: "https://firebasestorage.googleapis.com/v0/b/toodzhouse-6abde.appspot.com/o/items%2Fdefaultimg.png?alt=media&token=fe5cfc46-a6ba-422f-ac8d-5cd46c10c8eb"},

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