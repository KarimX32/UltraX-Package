const { Client } = require('discord.js'); // eslint-disable-line no-unused-vars
const schema = require('./schema/remind');
const ms = require('ms');
const { TypeError, Error } = require('../classes/non-public-classes/Error');

/**
 * Creates a reminder
 * @param {import("discord.js").Snowflake} memberID The ID of the member
 * @param {String|Number} time The reminder time
 * @param {String} reason The reminder
 * @returns {void}
 */
module.exports = (memberID, time, reason) => {
	if (!memberID) throw new Error('MISSING_PARAMETER', "The parameter 'memberID' is missing");
	if (!time) throw new Error('MISSING_PARAMETER', "The parameter 'time' is missing");
	if (!reason) throw new Error('MISSING_PARAMETER', "The parameter 'reason' is missing");
	if (typeof time === 'string' && !ms(time)) throw new Error('INVALID_PARAMETER', "The parameter 'time' is invalid");
	if (typeof memberID !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'memberID' must be a string");
	if (typeof time !== 'string' && typeof time !== 'number') throw new TypeError('PARAMETER_NOT_STRING_NOR_NUMBER', "The parameter 'time' must be a string or number");
	if (typeof reason !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'reason' must be a string");

	const data = new schema({
		memberID: (memberID),
		reason: (reason),
		time: typeof time === 'number' ? time : ms(time),
		timeMS: typeof time === 'number' ? time : ms(time),
	});
	data.save().catch((e) => { throw new Error('INTERNAL_ERROR', e); });
};

/**
 * Initialize the event listener into the client
 * @param {Client} client Discord Client
 * @returns {void}
 */
module.exports.init = (client) => {
	if (!client) throw new Error('MISSING_PARAMETER', "The parameter 'client' is missing");

	setInterval(() => {
		schema.find({}, function(err, docs) {
			if (err) return console.log(err);
			docs.forEach(async doc => {
				if (doc.time <= Date.now()) {
					await schema.deleteOne(doc);
					await client.users.fetch(doc.memberID);
					client.emit('reminder', client.users.cache.get(doc.memberID), doc.reason, await ms(doc.timeMS, { long: true }), doc.timeMS);
				}
			});
		});
	}, 10000);
};
