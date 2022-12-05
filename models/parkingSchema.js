const mongoose = require("mongoose");
const parkingSchema = new mongoose.Schema({
    cat:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("Parking", parkingSchema);