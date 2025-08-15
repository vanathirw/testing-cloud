// server.js

const express = require("express");
const morgan = require("morgan"); // For logging HTTP requests
const helmet = require("helmet"); // For basic security
const cors = require("cors"); // For handling cross-origin requests

const dummyRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check / Test route
app.get("/test", (req, res) => {
    res.status(200).send("Server is running ✅");
});

// API routes
app.use("/v1", dummyRouter);

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
