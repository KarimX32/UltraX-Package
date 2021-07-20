const Discord = require("discord.js");
/**
 * Create a daBaby image from a URL for a Discord.js Bot
 * @param {String} person_url The "dababy"
 *@returns {Discord.MessageAttachment}
 */

module.exports = async function daBaby(url) {
try {
        require.resolve("canvas")
    } catch (e) {
        throw new Error("[UltraX] => Cannot find module 'canvas' Please do ' npm i canvas@latest '")
    }

const Canvas = require('canvas')
    if (!url) throw new TypeError("Dababy: No url provided");

    const canvas = Canvas.createCanvas(320, 320);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_320/Dababy_BabyOnBaby.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const imageURL = await Canvas.loadImage(url);
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(imageURL, 50 * 2, 50 * 2, 200/2, 200/2);
    
    return new Discord.MessageAttachment(canvas.toBuffer(), 'DaBaby.png')
}
