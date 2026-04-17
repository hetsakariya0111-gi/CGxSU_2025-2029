const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/backendClassDB");
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.log("Database connection error:", err);
        process.exit(1); // stop app if DB fails
    }
}

module.exports = connectDB;