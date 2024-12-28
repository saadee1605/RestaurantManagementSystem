const jwt = require('jsonwebtoken');
const parseDuration = require('../utils/parseDuration')

const {
    getUserInfoThroughRefreshToken,
    generateNewAcessTokenThroughRefreshToken
} = require('../controllers/authenticationController');

const verifyAccessToken = async (req, res, next) => {
    const { accessToken, refreshToken } = req.cookies;


    if (!accessToken && !refreshToken) {
        return res.status(401).json({ message: "Access token and refresh token are missing" });
    }
    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;

        return next();
    } catch (err) {
        if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
            if (!refreshToken) {
                return res.status(401).json({ message: "Refresh token is missing" });
            }
            const userInfo = await getUserInfoThroughRefreshToken(refreshToken);
            if (!userInfo) {
                return res.status(403).json({ message: "Invalid refresh token" });
            }
            const newAccessToken = await generateNewAcessTokenThroughRefreshToken(userInfo);
            if (!newAccessToken) {
                return res.status(500).json({ message: "Failed to generate a new access token" });
            }            
            const cookieOptions = {
                httpOnly: true,
                sameSite: 'Strict',
                secure: true,
            };
            const accessTokenExpiry = parseDuration(process.env.ACCESS_TOKEN_EXPIRY);
            res.cookie('accessToken', newAccessToken, {
                ...cookieOptions,
                expires: new Date(Date.now() + accessTokenExpiry),
            });
            req.user = jwt.decode(newAccessToken);
            return next();
        }
        return res.status(403).json({ message: "Invalid access token" });
    }
};

module.exports = { verifyAccessToken };
