const app = require("./app");
const connectDB = require("./config/db");

const PORT = 5000;

// Connect DB and then start server
async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();