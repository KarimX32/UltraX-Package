const ultrax = require('ultrax')
exports.run = async (client, message, args, logger) => {

  let query = args.join()
  let branch = "master"

  ultrax.docs(query, branch, message)
}
  exports.help = {
    name: "docs",
    description: "Searchs Discord.js docs for a query",
    usage: "docs <query>",
    example: "docs guildMember"
  }

  exports.conf = {
    aliases: ["djs"], //Other names of the command.
    cooldown: 5 // % seconds of cooldown, Owners have bypass
  }
