const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    table_id: {type:String, required:true, unique:true},
    NameOrder: {type:String, required:true},
    price: {type: Number, default: 0},
    order: {type: Array, required:true},
    totalOrder: {type: Number, default: 0},
    totalItem: {type: Number, default: 0},
    isDinein: {type: Boolean, default: false},
    isNewOrder: {type: Boolean, default: true},
    },{timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);