const {
    Wikipedia
} = require('ultrax')
exports.run = async (client, message, args, logger) => {

    var query = args.join(' ')
    if (!query) return message.reply(`Please give a query!`)

    const res = new Wikipedia({
        message: message,
        color: "RED",
        query: query
    })
    res.fetch()
}
exports.help = {
    name: "wikipedia",
    description: "Searchs Wikipedia for a query",
    usage: "wikipedia <query>",
    example: "wikipedia cheese"
}

exports.conf = {
    aliases: ["wiki"], //Other names of the command.
    cooldown: 5 // % seconds of cooldown, Owners have bypass
}