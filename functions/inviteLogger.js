const invites = {};
const { Client } = require('discord.js'); // eslint-disable-line no-unused-vars
const { Error } = require('../classes/non-public-classes/Error');

/**
 * Initialize the event listener into the client
 * @param {Client} client
 * @returns {void}
 */
module.exports.init = function init(client) {
	if (!client) throw new Error('MISSING_PARAMETER', "Parameter 'client' is missing");

	client.on('ready', () => {
		client.guilds.cache.forEach(g => {
			g.invites.fetch().then(guildInvites => {
				invites[g.id] = guildInvites;
			});
		});
	});

	client.on('guildMemberAdd', member => {
		try {
			member.guild.invites.fetch().then(async guildInvites => {
				const ei = invites[member.guild.id];
				invites[member.guild.id] = guildInvites;
				if (!ei) return;
				await member.guild.invites.fetch().catch(() => undefined);
				const invite = guildInvites.find(i => {
					const a = ei.get(i.code);
					if (!a) return;
					return a;
				});
				if (!invite) return;
				const inviter = client.users.cache.get(invite.inviter.id);
				client.emit('inviteJoin', member, invite, inviter);
			});
		}
		catch (e) { throw new Error('INTERNAL_ERROR', e); }
	});
};