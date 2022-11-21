const Parking = require("../models/parkingSchema");

exports.updateParking = async (req, res) => {
    const { slots } = req.body;
    try {
        const updatedSlots = await Parking.findByIdAndUpdate({ _id: "637bc622d319c82060d9c689" }, { parking: slots });
        await updatedSlots.save();
        res.status(201).json({ message: "successfully updates slots", data: { updatedSlots } });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "fail", error: error });
    }
};
