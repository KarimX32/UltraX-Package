const { MessageAttachment } = require('discord.js');
const { Error, TypeError } = require('../classes/non-public-classes/Error');
const Canvas = require('canvas');

/**
 * Create a daBaby image from a URL for a Discord.js Bot
 * @param {String} url The avatar url
 *@returns {Promise<MessageAttachment>}
 */

module.exports = async function dababy(url) {
	if (!url) throw new Error('MISSING_PARAMETER', "Parameter 'url' is missing");
	if (typeof url !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "Parameter 'url' is not a string");
	if (!url.endsWith('.png')) throw new Error('INVALID_IMAGE_FORMAT', 'The image must be a PNG.');

	const canvas = Canvas.createCanvas(320, 320);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_320/Dababy_BabyOnBaby.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	const imageURL = await Canvas.loadImage(url);
	ctx.beginPath();
	ctx.arc(150, 150, 50, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.clip();
	ctx.drawImage(imageURL, 50 * 2, 50 * 2, 200 / 2, 200 / 2);

	return new MessageAttachment(canvas.toBuffer(), 'dababy.png');
};
