const Discord = require("discord.js");

/**
 * Starts a boost event
 * @param {Object} client Your client
 * @param {Snowflake} boostRoleID The ID of the booster role in the server
 * @returns {Promise<void>}
 */

module.exports.start = async (client, boostRoleID) => {
    if (!client) throw new SyntaxError("Missing the parameter 'client'");

    client.on('guildMemberUpdate', async (oldMember, newMember) => {

        if (!oldMember.roles.cache.some(role => role.id === boostRoleID) && newMember.roles.cache.some(role => role.id === boostRoleID)) {
            client.emit('boost', newMember)
        }
    });

}
