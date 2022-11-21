const Parking = require("../models/parkingSchema");

exports.getparking = async (req,res)=>{
    try {
        const slots = await Parking.findById({_id:"637bc622d319c82060d9c689"});
        res.status(201).json({data:{slots},message:"successfully"});
    } catch (error) {
        console.error(error);
    }
}