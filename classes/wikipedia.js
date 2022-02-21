const fetch = require('node-fetch')
const Discord = require('discord.js')

class Wikipeida {

  /**
   * @param {Object} options [REQUIRED] Options to apply
   * @param {Discord.Message} options.message The message
   * @param {String} [options.title] Title of the embed
   * @param {Discord.ColorResolvable} options.color Color of the embed 
   * @param {String} options.query The search query
  */
  constructor(options) {

    if (!options.color) throw new TypeError('[UltraX] => Error: Missing arugment color in wikipedia function.')
    if (typeof options.color !== 'string') throw new TypeError('[UltraX] => Error: Color must be a string! in wikipedia function.')
    if (!options.query) throw new TypeError('[UltraX] => Error: Missing arugment query in wikipedia function.')
    if (typeof options.query !== 'string') throw new TypeError('[UltraX] => Error: query must be a string! in wikipedia function.')
    if (!options.message && !options.interaction) throw new TypeError('[UltraX] => Error: Missing arugment \'message\' or \'interaction\' in wikipedia function.')
    if (options.message && options.interaction) throw new TypeError('[UltraX] => Error: Exceeded arugment, you cannot have \'message\' and \'interaction\' at the same time in wikipedia function.')

    this.message = options.message
    this.interaction = options.interaction
    this.color = options.color
    this.query = options.query
  }

  async fetch() {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(this.query)}`

    let response;
    try {
      response = await fetch(url).then(res => res.json())
    } catch (e) {
      console.log('Something went wrong with Wikipedia search\n' + e)
    }

    if (response.type === 'disambiguation') {
      try {
        const embed = new Discord.MessageEmbed()
          .setTitle(response.title)
          .setColor(this.color)
          .setURL(response.content_urls.desktop.page)
          .setThumbnail(response.thumbnail.source)
          .setDescription(`${response.extract} Other Links for the same topic: [Click Me!](${response.content_urls.desktop.page}).`)
        if(this.message) this.message.channel.send({ embeds: [embed] })
        if(this.interaction) this.interaction.reply({ embeds: [embed] })
        } catch (e) {
        if(this.message) this.message.channel.send({ embeds: [new Discord.MessageEmbed().setDescription(`:x: | No results for ${this.query}`).setColor("RED")] })
        if(this.interaction) this.interaction.reply({ embeds: [new Discord.MessageEmbed().setDescription(`:x: | No results for ${this.query}`).setColor("RED")] })
      }
      } else {
        try {
        const fullEmbed = new Discord.MessageEmbed()
          .setTitle(response.title)
          .setColor(this.color)
          .setURL(response.content_urls.desktop.page)
          .setThumbnail(response.thumbnail.source)
          .setDescription(response.extract)
        if(this.message) this.message.channel.send({ embeds: [fullEmbed] })
        if(this.interaction) this.interaction.reply({ embeds: [fullEmbed] })
        } catch (e) {
        if(this.message) this.message.channel.send({ embeds: [new Discord.MessageEmbed().setDescription(`:x: | No results for ${this.query}`).setColor("RED")] })
        if(this.interaction) this.interaction.reply({ embeds: [new Discord.MessageEmbed().setDescription(`:x: | No results for ${this.query}`).setColor("RED")] })
      }
      }
  }
}

module.exports = Wikipeida;
