const Discord = require("discord.js")
exports.run = async (client, message, args, logger) => {
    try {

        message.channel.send('My ping is ' + client.ws.ping);

    } catch (error) {
        logger.error(error);
    }
}

exports.help = {
    name: "ping",
    description: "Show's ping",
    usage: "ping",
    example: "ping"
}

exports.conf = {
    aliases: [], //Other names of the command.
    cooldown: 5 // % seconds of cooldown, Owners have bypass
}