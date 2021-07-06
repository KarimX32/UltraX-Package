const sleep = require('./functions/sleep'),
    passGen = require('./functions/passGen'),
    bin = require('./functions/bin'),
    inviteLogger = require("./functions/invite-logger"),
    _checkUpdate = require("./functions/checkUpdates"),
    ButtonPaginator = require("./functions/button-embed-reactor"),
    welcomeImage = require('./functions/welcomeImage'),
    Wikipedia = require('./classes/wikipedia'),
    sussyBaka = require('./classes/sussybaka'),
    remind = require('./functions/remind'),
    logger = require('./functions/logger')



_checkUpdate()
module.exports = {
    sleep,
    passGen,
    bin,
    inviteLogger,
    ButtonPaginator,
    welcomeImage,
    Wikipedia,
    sussyBaka
};

function connectToMongoDB(MongoDBURL) {
    try {
        require.resolve("mongoose")
    } catch (e) {
        throw new Error("[UltraX] => Cannot find module 'mongoose' Please do ' npm i mongoose@latest '")
    }
    const db = require("mongoose");
    let connected = true;
    db.connect(MongoDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(e => {
        connected = false;
        throw e;
    }).then(() => {
        if (connected === true) console.info("[UltraX] => Connected to DB successfully.")
    });
}
