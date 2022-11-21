const Parking = require("../models/parkingSchema");

exports.createParking=async ()=>{
    try {
        const slots = new Parking({parking:[0,0,0,0,0,0]})
        await slots.save();
    } catch (error) {
        console.error(error);
    }
}