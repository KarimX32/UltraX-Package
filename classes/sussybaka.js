const Canvas = require("canvas");
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
        if (!this.baka.endsWith('.png')) throw new Error("Invalid sussybaka's image has been provided");
        const the_canvas = Canvas.createCanvas(128 * 2, 128 * 2);
        const ctx = the_canvas.getContext("2d");
        const sussybaka = await Canvas.loadImage("https://cdn.discordapp.com/attachments/840140272531668992/860526903542415401/852084751388377089.png");
        ctx.drawImage(sussybaka, 0, 0, the_canvas.width, the_canvas.height);

        
        const theSussyBaka = await Canvas.loadImage(this.baka);
        ctx.drawImage(theSussyBaka, 70, 10, 150, 150);
        return new Discord.MessageAttachment(the_canvas.toBuffer(), 'sussybaka.png');
    }
};


module.exports = sussyBaka;