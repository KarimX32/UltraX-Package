const Discord = require("discord.js");
const schema = require("./schema/remind");
const ms = require("./non-public-functions/ms");

/**
 * Starts a boost event
 * @param {Object} client Your client
 * @param {Snowflake} boostRoleID The ID of the booster role in the server
 * @returns {Promise<void>}
 */

module.exports.start = async (client, boostRoleID) => {
    if (!client) throw new SyntaxError("Missing the parameter 'client'");

    client.on('guildMemberUpdate', async (oldMember, newMember) => {

        if (!oldMember.roles.cache.some(role => role.id === '874916368850513951') && newMember.roles.cache.some(role => role.id === '874916368850513951')) {
            client.emit('boost', newMember)
        }
    });

}
