const axios = require('axios').default;
const { MessageEmbed } = require('discord.js');
const { Error, TypeError } = require('./non-public-classes/Error');

class Wikipedia {
	/**
   * @param {import('../index').WikipediaOptions} options Options for the Wikipedia search
  */
	constructor(options) {
		if (!options.color) throw new Error('MISSING_PARAMETER', "Parameter 'options.color' is missing");
		if (typeof options.color !== 'string') throw new TypeError('INVALID_PARAMETER', 'Parameter options.color is not a string');
		if (!options.query) throw new Error('MISSING_PARAMETER', "Parameter 'options.query' is missing");
		if (typeof options.query !== 'string') throw new TypeError('INVALID_PARAMETER', 'Parameter options.query is not a string');
		if (!options.reply && !options.reply) throw new Error('MISSING_PARAMETER', "Parameter 'options.reply' is missing");

		this.reply = options.reply;
		this.color = options.color;
		this.query = options.query;
	}

	/**
   * Send the Wikipedia embed
   * @returns {Promise<void>}
   **/
	async send() {
		const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(this.query)}`;

		let response;
		try {
			response = await axios(url);
		}
		catch (e) {
			throw new Error('INTERNAL_ERROR', e);
		}

		if (response.data.type === 'disambiguation') {
			try {
				this.reply.reply({ embeds: [new MessageEmbed().setTitle(response.data.title).setColor(this.color).setURL(response.data.content_urls.desktop.page).setThumbnail(response.data.thumbnail.source).setDescription(`${response.data.extract} Other Links for the same topic: [Click Me!](${response.data.content_urls.desktop.page}).`)] });
			}
			catch (e) {
				this.reply.reply({ embeds: [new MessageEmbed().setDescription(`:x: | No results for ${this.query}`).setColor('RED')] });
			}
		}
		else {
			try {
				this.reply.reply({ embeds: [new MessageEmbed().setTitle(response.data.title).setColor(this.color).setURL(response.data.content_urls.desktop.page).setThumbnail(response.data.thumbnail.source).setDescription(response.data.extract)] });
			}
			catch (e) {
				this.reply.reply({ embeds: [new MessageEmbed().setDescription(`:x: | No results for ${this.query}`).setColor('RED')] });
			}
		}
	}
}

module.exports = Wikipedia;
