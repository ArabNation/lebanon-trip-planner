var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var lebanonSchema = new Schema({
    city: {
        type: String,
        required: true
    },
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
        ref: "user"
    },
	comments: {
        type: []
    }
	
});
var Lebanon = mongoose.model("Lebanon", lebanonSchema);
module.exports = Lebanon;
