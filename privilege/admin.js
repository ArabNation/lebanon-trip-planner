var express = require("express");
var jwt = require("jsonwebtoken");
var config = require("../config.js");

var admin = express();
admin.use("/", function (req, res, next) {
    var token = req.get("Authorization").split("Bearer ")[1];
    jwt.verify(token, config.secret, function (err, decoded) {
        console.log(decoded)
        if (err) {
            res.status(500).send(err)
        } else if (decoded.admin === "admin") {
            next()
        } else {
            res.status(200).send({
                msg: "not allowed"
            })
        }
    })
})
module.exports = admin;
