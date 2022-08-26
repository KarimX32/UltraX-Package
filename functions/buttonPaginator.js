const { Message, MessageEmbed, MessageButton, MessageActionRow } = require('discord.js'); // eslint-disable-line no-unused-vars
const { Error, TypeError } = require('../classes/non-public-classes/Error');

/**
 * Function to create a paginator with buttons.
 * @param {Message} message The message to reply the paginator on
 * @param {MessageEmbed[]} pages The pages to paginate
 * @param {MessageButton[]} buttons The buttons to use
 * @param {Number} [time] The time the paginator should last
 */
module.exports = async function buttonPaginator(message, pages, buttons, time = 60000) {
	if (!message) throw new Error('MISSING_PARAMETER', "The parameter 'message' is missing");
	if (!pages) throw new Error('MISSING_PARAMETER', "The parameter 'pages' is missing");
	if (!buttons) throw new Error('MISSING_PARAMETER', "The parameter 'buttons' is missing");
	if (typeof pages !== 'object') throw new TypeError('PARAMETER_NOT_ARRAY', "The parameter 'pages' must be an array");
	if (typeof buttons !== 'object') throw new TypeError('PARAMETER_NOT_ARRAY', "The parameter 'buttons' must be an array");
	if (time && typeof time !== 'number') throw new TypeError('PARAMETER_NOT_NUMBER', "The parameter 'time' must be a number");

	const filter = (m) => m.user.id === message.author.id;

	const row = new MessageActionRow().addComponents(buttons[0].setCustomId('prev'), buttons[1].setCustomId('next'));
	const msg = await message.reply({ embeds: [pages[0]], components: [row] });
	const collector = msg.channel.createMessageComponentCollector({ componentType: 'BUTTON', filter, time, idle: Math.round(time / 2), dispose: true });

	let currentPage = 0;

	collector.on('collect', async int => {
		int.deferUpdate();
		if (int.user.id !== message.author.id) return int.reply(`This is ${message.author.toString()}'s buttons.`);

		switch (int.customId) {
		case 'prev':
			if (currentPage === 0) currentPage = pages.length - 1;
			else currentPage--;
			await msg.edit({ embeds: [pages[currentPage]], components: [row] });
			break;
		case 'next':
			if (currentPage === pages.length - 1) currentPage = 0;
			else currentPage++;
			await msg.edit({ embeds: [pages[currentPage]], components: [row] });
			break;
		default:
			collector.stop();
			break;
		}
	});


	collector.on('end', async (collected, reason) => {
		if (reason === 'time') await msg.edit({ embeds: [pages[currentPage]], components: [new MessageActionRow().addComponents(buttons.map(b => b.setDisabled(true)))] });
	});
};
