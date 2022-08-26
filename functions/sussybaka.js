const { MessageAttachment } = require('discord.js');
const { Error, TypeError } = require('../classes/non-public-classes/Error');
const Canvas = require('canvas');

/**
 * Create a sussybaka image from an image url
 * @param {String} url The avatar url
 * @returns {Promise<MessageAttachment>} The image link
 */
module.exports = async function sussybaka(url) {
	if (!url) throw new Error('MISSING_PARAMETER', "Parameter 'url' is missing");
	if (typeof url !== 'string') throw new TypeError('INVALID_PARAMETER', "Parameter 'url' is not a string");
	if (!url.endsWith('.png')) throw new Error('INVALID_IMAGE_FORMAT', 'The image must be a PNG.');

	const canvas = Canvas.createCanvas(128 * 2, 128 * 2);
	const ctx = canvas.getContext('2d');
	const image = await Canvas.loadImage('https://cdn.discordapp.com/attachments/840140272531668992/860526903542415401/852084751388377089.png');
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);


	const theSussyBaka = await Canvas.loadImage(url);
	ctx.beginPath();
	ctx.arc(100, 100, 90, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
	ctx.drawImage(theSussyBaka, 0, 0, 200, 200);
	return new MessageAttachment(canvas.toBuffer(), 'sussybaka.png');
};
