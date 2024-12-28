const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const { generateAccessToken, generateRefreshToken } = require('../utils/authTokens');
const parseDuration = require('../utils/parseDuration')
const jwt = require('jsonwebtoken')
const signup = async (req, res) => {
    try {
        const { name, username, email, password, phno } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { name, username, email, password: hashedPassword, phno };
        await userModel.createNewUser(newUser);
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error in Signup Controller:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        let userData = await userModel.getUserByEmail(email) || await userModel.getUserByUsername(email);
        if (!userData) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const isValid = await bcrypt.compare(password, userData.password);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const accessToken = generateAccessToken(userData);
        const refreshToken = generateRefreshToken(userData);
        const accessTokenExpiry = parseDuration(process.env.ACCESS_TOKEN_EXPIRY);
        const refreshTokenExpiry = parseDuration(process.env.REFRESH_TOKEN_EXPIRY);
        const cookieOptions = {
            httpOnly: true,
            sameSite: 'Strict',
            secure: true,
        };

        res.cookie('accessToken', accessToken, {
            ...cookieOptions,
            expires: new Date(Date.now() + accessTokenExpiry),
        });
        res.cookie('refreshToken', refreshToken, {
            ...cookieOptions,
            expires: new Date(Date.now() + refreshTokenExpiry),
        });
        res.cookie('username', userData.username, {
            ...cookieOptions,
            expires: new Date(Date.now() + refreshTokenExpiry),
        });
        await userModel.signInUser({ signup_id: userData.signup_id, refreshToken });
        res.status(200).json({ message: 'Login successful', username: userData.username });
    } catch (error) {
        console.error('Error in Login Controller:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getCurrentUser = (req, res) => {
    res.json({ username: req.cookies.username, cookies: req.cookies })
}
const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            ourusername = null;
            return res.status(200).json({ message: 'Logged out successfully1' });
        }
        const userData = await userModel.getUserByRefreshToken(refreshToken);
        if (!userData) {
            return res.status(404).json({ message: 'User not found for the given refresh token' });
        }
        await userModel.removeRefreshToken(userData.signup_id, refreshToken);
        res.clearCookie('accessToken', { httpOnly: true, sameSite: 'Strict', secure: true });
        res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'Strict', secure: true });
        res.clearCookie('username', { httpOnly: true, sameSite: 'Strict', secure: true });

        res.status(200).json({ message: 'Logged out successfully2' });
    } catch (error) {
        console.error('Error in Logout Controller:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const getUserInfoThroughRefreshToken = async (refreshToken) => {
    try {
        if (!refreshToken) {
            throw new Error("Refresh token is missing");
        }
        const signUpId = await userModel.getSignUpId(refreshToken);

        if (!signUpId) {
            throw new Error("Invalid refresh token");
        }
        const userInfo = await userModel.getUserBySignupid(signUpId);
        if (!userInfo) {
            throw new Error("User not found");
        }

        return userInfo[0];
    } catch (error) {
        console.error("Error in getUserInfoThroughRefreshToken:", error.message);
        throw error;
    }
};
const generateNewAcessTokenThroughRefreshToken = async (userData) => {
    try {

        const refreshToken = await userModel.getRefreshToken(userData.signup_id);

        if (!refreshToken) {
            throw new Error("Refresh token not found for the user");
        }
        const decoded = jwt.verify(refreshToken[0].refresh_token, process.env.REFRESH_TOKEN_SECRET);
        const accessToken = generateAccessToken(userData);
        return accessToken;
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            console.error("Refresh Token has expired, please login again");
            throw new Error("Refresh Token has expired, please login again");
        } else if (err.message === "jwt malformed" || err.message === "invalid token") {
            console.error("Invalid refresh token");
            throw new Error("Invalid refresh token");
        } else {
            console.error("Unexpected error in generateNewAcessTokenThroughRefreshToken:", err.message);
            throw err;
        }
    }
};



module.exports = {
    signup,
    login,
    getCurrentUser,
    logout,
    getUserInfoThroughRefreshToken,
    generateNewAcessTokenThroughRefreshToken,

};
