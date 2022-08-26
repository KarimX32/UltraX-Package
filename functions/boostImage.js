const { Error, TypeError } = require('../classes/non-public-classes/Error');

/**
 * Create a boost card for Discord bots using discord.js
 * @param {String} url The avatar url
 * @returns {string} The image link
 */
module.exports = function boostImage(url) {
	if (!url) throw new Error('MISSING_PARAMETER', "The parameter 'url' is missing");
	if (typeof url !== 'string') throw new TypeError('INVALID_TYPE', "The parameter 'url' is not a string");
	const defaultpfps = {
		'0': 'https://media.discordapp.net/attachments/833275305812426772/875249964144533564/0.png',
		'1': 'https://media.discordapp.net/attachments/833275305812426772/875250005022216252/1.png',
		'2': 'https://media.discordapp.net/attachments/833275305812426772/875250057895612416/2.png',
		'3': 'https://media.discordapp.net/attachments/833275305812426772/875250096990748713/3.png',
		'4': 'https://media.discordapp.net/attachments/833275305812426772/875250146902933524/4.png',
		'5': 'https://media.discordapp.net/attachments/833275305812426772/875250233506951188/5.png',
	};

	if (url.startsWith('https://cdn.discordapp.com/embed/avatars/')) {
		const number = url.split('https://cdn.discordapp.com/embed/avatars/').join('').split('.png').join('');
		const defaultpfp = defaultpfps[number];
		return `https://frenchnoodles.xyz/api/endpoints/boostercard/?image=${defaultpfp}`;
	}
	else {
		return `https://frenchnoodles.xyz/api/endpoints/boostercard/?image=${url}`;
	}
};
