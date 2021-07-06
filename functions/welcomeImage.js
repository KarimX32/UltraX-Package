const Discord = require("discord.js");

/**
 * Create a welcome image for Discord bot using discord.js
 * @param {String} background The image background
 * @param {String} avatar The avatar
 * @param {String} text_1 The title
 * @param {String} text_2 The subtitle
 * @param {String} text_3 The footer
 * @param {String} color The color (hex code)
 * @param {String | Object} settings The attachment
 * @returns {Discord.MessageAttachment}
 */
module.exports = async function welcomeImage(background, avatar, text_1, text_2, text_3, color, settings) {
    try {
        require.resolve("canvas")
    } catch (e) {
        throw new Error("[UltraX] => Cannot find module 'canvas' Please do ' npm i canvas@latest '")
    }
    const Canvas = require("canvas");
    if (!background) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background is null.")
    if (!background.endsWith('.png')) throw new Error("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background must be a PNG.")
    if (!avatar) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> avatar is null")
    if (!text_1) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> text_1 is null")
    if (!text_2) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> text_2 is null")
    if (!text_3) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> text_3 is null")
    if (!color) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> color is null")
    if (!color.startsWith('#')) throw new ReferenceError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> color is not a hex")
    let fonts;
    let attachmentName;
    let text1_fontSize;
    let text2_fontSize;
    let text3_fontSize;

    if (!settings || !settings.font) fonts = "sans-serif"
    else fonts = settings.font

    if (!settings || !settings.attachmentName) attachmentName = "welcome"
    else attachmentName = settings.attachmentName

    if (!settings || !settings.text1_fontSize) text1_fontSize = 72
    else if (isNaN(settings.text1_fontSize)) throw new Error("text1_fontSize ==> The text 1 font size isNaN")
    else if (settings.text1_fontSize < 5) throw new Error("text1_fontSize ==> The text 1 font size cannot be less than 5px")
    else text1_fontSize = settings.text1_fontSize

    if (!settings || !settings.text2_fontSize) text2_fontSize = 42
    else if (isNaN(settings.text2_fontSize)) throw new Error("text2_fontSize ==> The text 2 font size isNaN")
    else if (settings.text2_fontSize < 5) throw new Error("text2_fontSize ==> The text 2 font size cannot be less than 5px")
    else text2_fontSize = settings.text2_fontSize

    if (!settings || !settings.text3_fontSize) text3_fontSize = 32
    else if (isNaN(settings.text3_fontSize)) throw new Error("text3_fontSize ==> The text 3 font size isNaN")
    else if (settings.text3_fontSize < 5) throw new Error("text3_fontSize ==> The text 3 font size cannot be less than 5px")
    else text3_fontSize = settings.text3_fontSize


    var welcomeCanvas = {};
    welcomeCanvas.create = Canvas.createCanvas(1024, 500)
    welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
    const ctx = welcomeCanvas.context
    ctx.font = `${text1_fontSize}px ${fonts}`;
    ctx.fillStyle = color;

    const bg = await Canvas.loadImage(background)
    ctx.drawImage(bg, 0, 0, 1024, 500)
    ctx.textAlign = 'center'
    ctx.fillText(text_1, 512, 360);
    ctx.beginPath();
    ctx.arc(512, 166, 128, 0, Math.PI * 2, true);
    ctx.stroke()
    ctx.fill()
    let canvas = welcomeCanvas;
    canvas.context.font = `${text2_fontSize}px ${fonts}`,
        canvas.context.textAlign = 'center';
    canvas.context.fillText(text_2, 512, 410)
    canvas.context.font = `${text3_fontSize}px ${fonts}`
    canvas.context.fillText(text_3, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(avatar)
        .then(img => {
            canvas.context.drawImage(img, 393, 47, 238, 238);
        })
        return new Discord.MessageAttachment(canvas.create.toBuffer(), `${attachmentName}.png`);
}
