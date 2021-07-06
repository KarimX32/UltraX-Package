const {
    Schema,
    model
} = require("mongoose");

module.exports = model('remind', new Schema({
    memberID: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: false
    },
    lastUpdated: {
        type: String,
        default: new Date().toLocaleString()
    },
    timeMS: {
        type: Number,
        required: true
    }
}));