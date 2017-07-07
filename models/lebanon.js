var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var lebanonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});
var Lebanon = mongoose.model("Lebanon", lebanonSchema);
module.exports = Lebanon;
