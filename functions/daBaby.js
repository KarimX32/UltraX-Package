const Discord = require("discord.js");
const Canvas = require('canvas')
/**
 * Create a daBaby image from a URL for a Discord.js Bot
 * @param {String} background The image background
 * @returns {Discord.MessageAttachment}
 */

module.exports = async function daBaby(url) {
    const canvas = Canvas.createCanvas(867, 892);    
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_320/Dababy_BabyOnBaby.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    const imageURL = await Canvas.loadImage(url);

    ctx.drawImage(imageURL, 285, 260, 280, 300);

    return new Discord.MessageAttachment(canvas.toBuffer(), 'DaBaby.png')

    
}

module.exports = daBaby;
