const { MessageAttachment } = require('discord.js');
const { Error, TypeError } = require('../classes/non-public-classes/Error');
const Canvas = require('canvas');

/**
 * Create a welcome image for Discord bot using discord.js
 * @param {String} background The image background
 * @param {String} avatar The avatar for the image
 * @param {String} title The title for the image
 * @param {String} subtitle The subtitle for the image
 * @param {String} footer The footer for the image
 * @param {String} color The color for the image
 * @param {import("../index").WelcomeImageSettingsOptions} [settings] The settings for the image
 * @returns {Promise<MessageAttachment>}
 */
module.exports = async function welcomeImage(background, avatar, title, subtitle, footer, color, settings) {
	const Canvas = require('canvas');
	if (!background) throw new Error('MISSING_PARAMETER', "The parameter 'background' is missing");
	if (!background.endsWith('.png')) throw new Error('PARAMETER_NOT_PNG', "The parameter 'background' is not a PNG");
	if (!avatar) throw new Error('MISSING_PARAMETER', "The parameter 'avatar' is missing");
	if (!title) throw new Error('MISSING_PARAMETER', "The parameter 'title' is missing");
	if (!subtitle) throw new Error('MISSING_PARAMETER', "The parameter 'subtitle' is missing");
	if (!footer) throw new Error('MISSING_PARAMETER', "The parameter 'footer' is missing");
	if (!color) throw new Error('MISSING_PARAMETER', "The parameter 'color' is missing");
	if (typeof background !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'background' must be a string");
	if (typeof avatar !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'avatar' must be a string");
	if (typeof title !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'title' must be a string");
	if (typeof subtitle !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'subtitle' must be a string");
	if (typeof footer !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'footer' must be a string");
	if (typeof color !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'color' must be a string");
	if (!/^#[0-9A-F]{6}$/i.test(color) == true && !/^#([0-9A-F]{3}){1,2}$/i.test(color) == true) throw new Error('PARAMETER_NOT_HEX', "The parameter 'color' is not a hexadecimal color");
	let font;
	let attachmentName;
	let title_fontSize;
	let subtitle_fontSize;
	let footer_fontSize;

	if (!settings || !settings.font) font = 'sans-serif';
	else font = settings.font;

	if (!settings || !settings.attachmentName) attachmentName = 'welcome';
	else attachmentName = settings.attachmentName;

	if (!settings || !settings.title_fontSize) title_fontSize = 72;
	else if (isNaN(settings.title_fontSize)) throw new Error('PARAMETER_NAN', "The parameter 'settings.title_fontSize' is not a number");
	else if (settings.title_fontSize < 5) throw new Error('PARAMETER_LESS_THAN_5', "The parameter 'settings.title_fontSize' is less than 5px");
	else title_fontSize = settings.title_fontSize;

	if (!settings || !settings.subtitle_fontSize) subtitle_fontSize = 42;
	else if (isNaN(settings.subtitle_fontSize)) throw new Error('PARAMETER_NAN', "The parameter 'settings.subtitle_fontSize' is not a number");
	else if (settings.subtitle_fontSize < 5) throw new Error('PARAMETER_LESS_THAN_5', "The parameter 'settings.subtitle_fontSize' is less than 5px");
	else subtitle_fontSize = settings.subtitle_fontSize;

	if (!settings || !settings.footer_fontSize) footer_fontSize = 32;
	else if (isNaN(settings.footer_fontSize)) throw new Error('PARAMETER_NAN', "The parameter 'settings.footer_fontSize' is not a number");
	else if (settings.footer_fontSize < 5) throw new Error('PARAMETER_LESS_THAN_5', "The parameter 'settings.footer_fontSize' is less than 5px");
	else footer_fontSize = settings.footer_fontSize;


	const welcomeCanvas = {};
	welcomeCanvas.create = Canvas.createCanvas(1024, 500);
	welcomeCanvas.context = welcomeCanvas.create.getContext('2d');
	const ctx = welcomeCanvas.context;
	ctx.font = `${title_fontSize}px ${font}`;
	ctx.fillStyle = color;

	const bg = await Canvas.loadImage(background);
	ctx.drawImage(bg, 0, 0, 1024, 500);
	ctx.textAlign = 'center';
	ctx.fillText(title, 512, 360);
	ctx.beginPath();
	ctx.arc(512, 166, 128, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fill();
	const canvas = welcomeCanvas;
	canvas.context.font = `${subtitle_fontSize}px ${font}`,
	canvas.context.textAlign = 'center';
	canvas.context.fillText(subtitle, 512, 410);
	canvas.context.font = `${footer_fontSize}px ${font}`;
	canvas.context.fillText(footer, 512, 455);
	canvas.context.beginPath();
	canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true);
	canvas.context.closePath();
	canvas.context.clip();
	await Canvas.loadImage(avatar)
		.then(img => {
			canvas.context.drawImage(img, 393, 47, 238, 238);
		});
	return new MessageAttachment(canvas.create.toBuffer(), `${attachmentName}.png`);
};
