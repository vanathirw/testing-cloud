const axios = require("axios");

// POST: /v1/app
const dummyApi = async (req, res) => {
    try {
        const payload = req.body;

        return res.status(200).json({
            success: true,
            message: "Data received successfully",
            data: payload,
        });

    } catch (error) {
        console.error("dummyApi error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// GET: /v1/app
const dummyApiGet = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "hai",
        });

    } catch (error) {
        console.error("dummyApiGet error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    dummyApi,
    dummyApiGet,
};