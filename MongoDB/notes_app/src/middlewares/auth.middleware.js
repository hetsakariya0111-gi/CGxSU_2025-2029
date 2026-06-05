function auth(req, res, next) {

    // Step 1: Extract token
    const token = req.headers.authorization;

    // Step 2: Check token exists
    if (!token) {
        return res.status(400).json({ msg: "Access denied. Token required" });
    }

    // Step 3: Validate token
    if (token !== "yogesh") {
        return res.status(401).json({ msg: "Invalid token" });
    }

    // Step 4: Success
    console.log("Successfully verified token");

    next();
}

module.exports = auth;