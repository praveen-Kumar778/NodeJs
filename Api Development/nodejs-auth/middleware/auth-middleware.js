const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access Denied. No Token Provided Please Login to Continue"
        });
    }
    // decode this token 
    try {
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodeToken);

        req.userInfo = decodeToken;

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Access Denied. No Token Provided Please Login to Continue"
        });
    }
    next();
}

module.exports = authMiddleware;