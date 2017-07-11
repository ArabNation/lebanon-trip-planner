var express = require("express");
var lebanonRouter = express.Router();
var Lebanon = require("../models/lebanon");
var admin = require("../privilege/admin.js");


lebanonRouter.route("/")
    .get(function (req, res) {
        Lebanon.find(function (err, lebanons) {
            if (err) return res.status(500).send(err);
            return res.send(lebanons);
        })
    });

lebanonRouter.route("/:lebanonId")
.put(function (req, res) {
        Lebanon.findOneAndUpdate({_id: req.params.lebanonId},req.body, {new: true}, function (err, lebanon) {
            if (err) return res.status(500).send(err);
            return res.send(lebanon);
        })
    });
lebanonRouter.use(admin)
lebanonRouter.route("/")
    .post(function (req, res) {
		req.body.user = req.user
        var lebanon = new Lebanon(req.body);
		console.log(lebanon)
        lebanon.save(function (err, newLebanon) {
            if (err) return res.status(201).send(newLebanon);
            return res.status(201).send(newLebanon);
        })
    });
lebanonRouter.route("/:lebanonId")
    .get(function (req, res) {
        Lebanon.findById({
            _id: req.params.lebanonId
        }, function (err, lebanon) {
            if (err) return res.status(500).send(err);
            if (!lebanon) return res.status(404).send("no item found");
            return res.send(lebanon);
        })
    })
    
    .delete(function (req, res) {
        Lebanon.findOneAndRemove({
            _id: req.params.lebanonId
        }, function (err, lebanon) {
            if (err) return res.status(500).send(err);
            return res.send(lebanon)
        })
    })
module.exports = lebanonRouter;
