const db = require("mongoose");
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
    logger = require('./functions/logger'),
    daBaby = require('./functions/daBaby'),
    boostImage = require('./functions/boostImage'),
    boost = require('./functions/boost')

_checkUpdate()
module.exports = {
    sleep,
    passGen,
    bin,
    inviteLogger,
    ButtonPaginator,
    welcomeImage,
    Wikipedia,
    sussyBaka,
    connectToMongoDB,
    remind,
    logger,
    daBaby,
    boostImage,
    boost
};

/**
 * Connect to MongoDB Server
 * @param {String} MongoDBURI The MongoDB URI
 * @returns {void}
 */
function connectToMongoDB(MongoDBURI) {
    let connected = true;
    db.connect(MongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(e => {
        connected = false;
        throw e;
    }).then(() => {
        if (connected === true) console.info("[UltraX] => Connected to DB successfully.")
    });
}
