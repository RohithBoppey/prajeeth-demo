const Parking = require("../models/parkingSchema");

exports.createParking=async (req,res)=>{
    const { cate } = req.body;
    try {
        date = new Date().toLocaleDateString();
        time = new Date().toLocaleTimeString();
        datestr = date+' '+time;
        console.log(datestr);
        console.log(cate);
        const slots = new Parking({cat:cate, date: date+' '+time})
        await slots.save();
    } catch (error) {
        console.error(error);
    }
}