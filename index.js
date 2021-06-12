const sleep = require('./functions/sleep'),
    passGen = require('./functions/passGen'),
    bin = require('./functions/bin'),
    inviteLogger = require("./functions/invite-logger"),
    _checkUpdate = require("./functions/checkUpdates")


_checkUpdate()
module.exports = {
    sleep,
    passGen,
    bin,
    inviteLogger
};