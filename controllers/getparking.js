const Parking = require("../models/parkingSchema");

exports.getparking = async (req,res)=>{
    try {
        const slots = await Parking.findById({_id:"637bc622d319c82060d9c689"});
        res.status(201).json({"slots":slots['parking']});
    } catch (error) {
        console.error(error);
    }
}