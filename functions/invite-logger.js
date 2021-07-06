const invites = {};
const Discord = require("discord.js");

/**
 * Invite Logger system in Discord bot using discord.js
 * @param {Discord.Client} client 
 * @returns {Promise<void>}
 */
async function inviteLogger(client) {
    // Initialize the invite cache
    // A pretty useful method to create a delay without blocking the whole script.
    const wait = require('./sleep');
    client.on('ready', async () => {
        // "ready" isn't really ready. We need to wait a spell.
        await wait(1000);

        // Load all invites for all guilds and save them to the cache.
        client.guilds.cache.forEach(g => {
            g.fetchInvites().then(guildInvites => {
                invites[g.id] = guildInvites;
            });
        });
    });
    client.on('guildMemberAdd', member => {
        try {
            // To compare, we need to load the current invite list.
            member.guild.fetchInvites().then(async guildInvites => {
                // This is the *existing* invites for the guild.
                const ei = invites[member.guild.id];
                // Update the cached invites for the guild.
                invites[member.guild.id] = guildInvites;
                if (!ei) return;
                //  Look through the invites, find the one for which the uses went up.
                await member.guild.fetchInvites().catch(() => undefined);
                const invite = guildInvites.find(i => {
                    const a = ei.get(i.code);
                    if (!a) return;
                    return a.uses < i.uses
                });
                if (!invite) return;
                // This is just to simplify the message being sent below (inviter doesn't have a tag property)
                const inviter = client.users.cache.get(invite.inviter.id);
                // Get the log channel (change to your liking)
                client.emit("inviteJoin", member, invite, inviter)
            });
        } catch (e) {}
    });
};

/**
 * @event inviteJoin
 * @param {Discord.GuildMember} member The guild member
 * @param {Discord.Invite} invite The invite
 * @param {Discord.User} inviter The inviter
 */

module.exports = inviteLogger;