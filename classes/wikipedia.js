const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
class Wikipeida {
  /**
   * @name Wikipedia
   * @kind constructor
   * @param {any} [options.message] the discord message
   * @param {string} [options.title] title of the embed
   * @param {string} [options.color] color of embed 
    * @param {string} [options.query] search query
  */

  constructor(options) {

    if (!options.color) throw new TypeError('Error Missing arugment color')
    if (typeof options.color !== 'string') throw new TypeError('Error: Color must be a string!')

    if (!options.query) throw new TypeError('Error Missing arugment query')

    if (typeof options.query !== 'string') throw new TypeError('Error: query must be a string!')

    if (!options.message) throw new TypeError('Error Missing arugment message')

    this.message = options.message
    this.color = options.color
    this.query = options.query
  }

  async fetch() {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(this.query)}`

    let response = await fetch(url).then(res => res.json())
    try {
      if (response.type === 'disambiguation') {
        const embed = new MessageEmbed()
          .setTitle(response.title)
          .setColor(this.color)
          .setURL(response.content_urls.desktop.page)
          .setThumbnail(response.thumbnail.source)
          .setDescription([`
                ${response.extract}
                Other Links for the same topic: [Click Me!](${response.content_urls.desktop.page}).`])
      } else {
        const fullEmbed = new MessageEmbed()
          .setTitle(response.title)
          .setColor(this.color)
          .setURL(response.content_urls.desktop.page)
          .setThumbnail(response.thumbnail.source)
          .setDescription(response.extract)
      }
    } catch (e) {
      this.channel.send(`No results for ${this.query}`)
    }
  }
}

module.exports = Wikipedia;
