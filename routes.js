
const express = require("express");
const { dummyApi, dummyApiGet } = require("./controller");

const router = express.Router();

// Routes
router.post("/app", dummyApi);
router.get("/app", dummyApiGet);

module.exports = router;