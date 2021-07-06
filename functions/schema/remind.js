try {
    require.resolve("mongoose")
} catch (e) {
    throw new Error("[UltraX] => Cannot find module 'mongoose' Please do ' npm i mongoose@latest '")
}
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
    lastUpdatedMS: {
        type: Number,
        default: Date.now()
    }
}));