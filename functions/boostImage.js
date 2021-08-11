const Discord = require("discord.js");

/**
 * Create a boost card for Discord bots using discord.js
 * @param {String} url The avatar url
 * @returns {String} The image link
 */
module.exports = async function boostImage(url) {
    try {
        require.resolve("node-fetch")
    } catch (err) {
        throw new Error("Cannot find module 'node-fetch'")
    }
    const fetch = require('node-fetch')
    if (!url) throw new SyntaxError("Missing the parameter 'url'");
    let defaultpfps = [
        "https://media.discordapp.net/attachments/833275305812426772/874575015054569482/yhye4cosb7271.png",
        "https://media.discordapp.net/attachments/833275305812426772/874575202741284924/pAAAAAElFTkSuQmCC.png",
        "https://media.discordapp.net/attachments/833275305812426772/874580919216926760/enpFjYEafaA8OZAAAAAAGVvf46sAAAAAAAAAAAAAAAAAAAAAAFYCeHSjWah9hFcAAAAASUVORK5CYII.png",
        "https://media.discordapp.net/attachments/833275305812426772/874589430692872192/1Pb4KAAAAAAAAAAAAAAAAAAAAAGAlB3yyZnlY4UQAAAAASUVORK5CYII.png"
    ];

    let defaultpfp = defaultpfps[Math.floor(Math.random() * defaultpfps.length)];

    if (url.startsWith('https://cdn.discordapp.com/embed/avatars/')) {
        return `https://frenchnoodles.xyz/api/endpoints/boostercard/?image=${defaultpfp}`
    } else {
        return `https://frenchnoodles.xyz/api/endpoints/boostercard/?image=${url}`
    }
}
