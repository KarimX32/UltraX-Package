module.exports = async function welcomeImage(background, avatar, text_1, text_2, text_3, color, settings) {
    const Canvas = require('canvas')
    const discord = require('discord.js')
    if(!background) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background is null.")
    if(!background.endsWith('.png')) throw new Error("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background must be a PNG.")
    if(!avatar) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> avatar is null")
    if(!text_1) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> text_1 is null")
    if(!text_2) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> text_2 is null")
    if(!text_3) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> text_3 is null")
    if(!color) throw new SyntaxError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> color is null")
    if(!color.startsWith('#')) throw new ReferenceError("welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> color is not a hex")
    let fonts;
    let attachmentName;
    if(!settings || !settings.font) fonts = "sans-serif"
    else fonts = settings.font
    if(!settings || !settings.attachmentName) attachmentName = "welcome"
    else attachmentName = settings.attachmentName


    var welcomeCanvas = {};
    welcomeCanvas.create = Canvas.createCanvas(1024, 500)
    welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
    const ctx = welcomeCanvas.context
    ctx.font = `72px ${fonts}`;
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
    canvas.context.font = `42px ${fonts}`,
    canvas.context.textAlign = 'center';
    canvas.context.fillText(text_2, 512, 410)
    canvas.context.font = `32px ${fonts}`
    canvas.context.fillText(text_3, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(avatar)
    .then(img => {
        canvas.context.drawImage(img, 393, 47, 238, 238);
    })
    
	return new discord.MessageAttachment(canvas.create.toBuffer(), `${attachmentName}.png`);
}

