const fetch = require("node-fetch");
/**
 * Search the Discord.js Docs for a query
 * @param {String} query, query for the search
 * @param {String} branch, branch for the search
 * @param {String} Message, Discord Message 
 * @returns {Discord.MessageEmbed}
 */

module.exports = async function docs(query, branch, message) {

fetch(`https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(json => {
        if (!json) return message.chanel.send(`:x: | No results for ${query}`)
        message.channel.send({ embed: json });
      })
      .catch(() => {
        message.channel.send(`:x: | An unexpected err occrued`)
      });
}
