const express = require("express");
const router = express.Router();
const { updateParking } = require("../controllers/updateParking");
const { createParking } = require("../controllers/createParking");
const { getparking } = require("../controllers/getparking");
router.post("/", updateParking);
router.get("/create", createParking);
router.get("/", getparking);
module.exports = router;
