const Discord = require("discord.js")


/**
 * Starts a boost event
 * @param {Discord.Client} client Your client
 * @param {Discord.Snowflake} boostRoleID The ID of the booster role in the server
 * @returns {Promise<void>}
 */

module.exports.start = async (client, boostRoleID) => {
    if (!client) throw new SyntaxError("Missing the parameter 'client'");
    if (!boostRoleID) throw new SyntaxError("Missing the parameter 'boostRoleID'");

    client.on('guildMemberUpdate', async (oldMember, newMember) => {
        if (!newMember.guild.roles.cache.get(boostRoleID)) throw new Error("Given ID is invalid or has no matching role in the guild");

        if (!oldMember.roles.cache.some(role => role.id === boostRoleID) && newMember.roles.cache.some(role => role.id === boostRoleID)) {
            client.emit('boost', newMember)
        };
    });

}