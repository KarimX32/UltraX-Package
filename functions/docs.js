const fetch = require("node-fetch");
const { MessageEmbed, Message } = require("discord.js")

/**
 * Search the Discord.js Docs for a query
 * @param {String} query query for the search
 * @param {String} branch branch for the search
 * @param {Message} message Discord Message 
 * @returns {Promise<void>}
 */
module.exports = async function docs(query, branch, message) {

fetch(`https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(json => {
        if (!json) return message.channel.send(`:x: | No results for ${query}`)
       return message.channel.send({ embeds: [json] });
      })
      .catch(() => {
        return message.channel.send(`:x: | An unexpected err occurred`)
      });
}
