var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");



var port = process.env.PORT || 8080;
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
mongoose.connect(config.database, function (err) {
    if (err) console.log(err);
    console.log("successfully connected to the db!")
});




app.listen(port, function(){
    console.log(`server listening on port ${port}`)
})

