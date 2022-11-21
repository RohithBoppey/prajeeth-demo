const mongoose = require("mongoose");
const parkingSchema = new mongoose.Schema({
    parking:{
        type:[Number],
        required: true
    }
})

module.exports = mongoose.model("Parking", parkingSchema);