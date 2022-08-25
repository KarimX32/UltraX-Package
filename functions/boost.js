const { Client } = require('discord.js'); // eslint-disable-line no-unused-vars
const { Error } = require('../classes/non-public-classes/Error');

/**
 * Initialize the event listener into the client
 * @param {Client} client Your client
 * @returns {void}
 */
module.exports.init = (client) => {
	if (!client) throw new Error('MISSING_PARAMETER', "The parameter 'client' is missing");

	client.on('guildMemberUpdate', (oldMember, newMember) => {
		if (oldMember.premiumSinceTimestamp != newMember.premiumSinceTimestamp) {
			client.emit('boost', newMember);
		}
	});
};