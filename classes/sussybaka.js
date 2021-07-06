const Discord = require("discord.js");

class sussyBaka {
    /**
     * @name sussyBaka
     * @kind constructor
     * @param {String} baka The sussybaka's link, needs to end with .png
     */

    constructor(baka) {
        this.baka = baka;
    }

    async get() {
        try {
            require.resolve("canvas")
        } catch (e) {
            throw new Error("[UltraX] => Cannot find module 'canvas' Please do ' npm i canvas@latest '")
        }
        const Canvas = require("canvas");
        if (!this.baka.endsWith('.png')) throw new Error("Invalid sussybaka's image has been provided");
        const the_canvas = Canvas.createCanvas(128 * 2, 128 * 2);
        const ctx = the_canvas.getContext("2d");
        const sussybaka = await Canvas.loadImage("https://cdn.discordapp.com/attachments/840140272531668992/860526903542415401/852084751388377089.png");
        ctx.drawImage(sussybaka, 0, 0, the_canvas.width, the_canvas.height);


        const theSussyBaka = await Canvas.loadImage(this.baka);
        ctx.beginPath();
        ctx.arc(100, 100, 90, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(theSussyBaka, 0, 0, 200, 200);
        return new Discord.MessageAttachment(the_canvas.toBuffer(), 'sussybaka.png');
    }
};


module.exports = sussyBaka;