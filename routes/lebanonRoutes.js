var express = require("express");
var lebanonRouter = express.Router();
var Lebanon = require("../models/lebanon");

lebanonRouter.route("/")
    .get(function (req, res) {
        Lebanon.find({
            user: req.user._id
        }, function (err, lebanons) {
            if (err) return res.status(500).send(err);
            return res.send(lebanons);
        })
    })
    .post(function (req, res) {
        var lebanon = new Lebanon(req.body);
        lebanon.user = req.user;
        lebanon.save(function (err, newLebanon) {
            if (err) return res.status(201).send(newLebanon);
            return res.status(201).send(newLebanon);
        })
    });
lebanonRouter.route("/:lebanonId")
    .get(function (req, res) {
        Lebanon.findById({
            _id: req.params.lebanonId,
            user: req.user._id
        }, function (err, lebanon) {
            if (err) return res.status(500).send(err);
            if (!lebanon) return res.status(404).send("no item found");
            return res.send(lebanon);
        })
    })
    .put(function (req, res) {
        Lebanon.findOnAndUpdate({
            _id: req.params.lebanonId,
            user: req.user._id
        }, {
            new: true
        }, function (err, lebanon) {
            if (err) return res.status(500).send(err);
            return res.send(lebanon);
        })
    })
    .delete(function (req, res) {
        Lebanon.findOneAndRemove({
            _id: req.params.lebanonId,
            user: req.user._id
        }, function (err, lebanon) {
            if (err) return res.status(500).send(err);
            return res.send(lebanon)
        })
    })
module.exports = lebanonRouter;
