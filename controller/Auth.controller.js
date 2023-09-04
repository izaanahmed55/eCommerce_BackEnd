const express = require("express")
const router = express.Router()
const Auth = require("../model/Auth.model")

const getAuth = async (req, res) => {
    try {
        const auth = await Auth.find();
        res.json(auth);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error getting auth data");
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        console.log(req.body);
        const auth = await Auth.find({ username, password });
        console.log(auth);
        if (auth.length > 0) {
            res.json({ success: true, username: auth[0].username });
        } else {
            res.json({ success: false, data: "Error getting auth data" });
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, data: "Error getting auth data" });
    }
};

module.exports = {
    getAuth,
    loginUser,
};