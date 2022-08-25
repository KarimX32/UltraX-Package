const db = require('mongoose');
const sleep = require('./functions/sleep'),
	passGen = require('./functions/passGen'),
	bin = require('./functions/bin'),
	inviteLogger = require('./functions/inviteLogger'),
	_checkUpdate = require('./functions/checkUpdates'),
	buttonPaginator = require('./functions/buttonPaginator'),
	welcomeImage = require('./functions/welcomeImage'),
	Wikipedia = require('./classes/wikipedia'),
	sussybaka = require('./functions/sussybaka'),
	remind = require('./functions/remind'),
	logger = require('./functions/logger'),
	dababy = require('./functions/dababy'),
	boostImage = require('./functions/boostImage'),
	boost = require('./functions/boost');

_checkUpdate();
module.exports = {
	sleep,
	passGen,
	bin,
	inviteLogger,
	buttonPaginator,
	welcomeImage,
	Wikipedia,
	sussybaka,
	connectToMongoDB,
	remind,
	logger,
	dababy,
	boostImage,
	boost,
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
		useUnifiedTopology: true,
	}).catch(e => {
		connected = false;
		throw e;
	}).then(() => {
		if (connected === true) console.info('[UltraX] => Connected to DB successfully.');
	});
}
