var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var lebanonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});
var Lebanon = mongoose.model("Lebanon", lebanonSchema);
module.exports = Lebanon;
