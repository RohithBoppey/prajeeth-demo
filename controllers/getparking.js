const Parking = require("../models/parkingSchema");

exports.getparking = async (req,res)=>{
    try {
        const slots = await Parking.find();
        res.status(201).json(slots);
    } catch (error) {
        console.error(error);
    }
}