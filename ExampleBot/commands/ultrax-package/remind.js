const remind = require("ultrax").remind;
exports.run = async (client, message, args) => {
    const time = args[0];
    const reason = args.slice(1).join(" ");
    if (!time) return message.channel.send("Specify Time! e.g `1m`")
    if (!reason) return message.channel.send("Specify Reason! e.g `Going to Market`")
    remind(message.author.id, time, reason);
    message.channel.send("Successfully set a reminder.")
}

exports.help = {
    name: "remind",
    description: "remind you about something ",
    usage: "/remind time reason",
    example: "/remind 10m See a new video."
};

exports.conf = {
    aliases: [],
    cooldown: 5 // This number is a seconds, not a milliseconds.
    // 1 = 1 seconds.
}