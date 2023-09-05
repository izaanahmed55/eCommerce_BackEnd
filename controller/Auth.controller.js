const express = require("express")
const Auth = require ("../model/Auth.model")

const getAuth = async (req, res) => {
    try {
        const auth = await Auth.find();
        if (auth !== null && auth !== undefined) {
            res.json(auth);
        } else {
            res.status(404).send("Auth data not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error getting auth data");
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)

        const auth = await Auth.find(username, password);
        console.log(auth)
        if (auth.length > 0) {
            res.json({ success: true, username: auth[0].username, password: auth[0].password });
        } else {
            res.json({ success: false, data: "Username or password incorrect" });
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