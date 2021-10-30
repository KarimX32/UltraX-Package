const Discord = require("discord.js");
const token = require("./passGen")(5);

/**
 * A button paginator
 * @param {Discord.Message} message The main message content
 * @param {Discord.MessageEmbed[]} pages An array of embeds
 * @param {Discord.MessageButton[]} [buttons] An array of message components (buttons)
 * @param {Number} [time] The timeout
 */
module.exports = async function ButtonPaginator(message, pages, buttons = [], time = 60000) {
    if (!message) throw new ReferenceError('EmbedPages => "message" is not defined')
    if (!pages || typeof pages !== 'object') throw new SyntaxError('EmbedPages => Invalid form body [pages]')
    const filter = (m) => {
        if (m.user.id !== message.author.id) {
            m.reply({content: "Please dont use others buttons", ephemeral: true})
            return m.user.id === message.author.id;
} else {
    return m.user.id === message.author.id;
}
    };
    let collector;
    const row = new Discord.MessageActionRow()
		.addComponents(buttons[0].setCustomId(`prev_${token}`), buttons[1].setCustomId(`next_${token}`));
    const msg = await message.reply({embeds: [pages[0]], components: [row]});

        collector = msg.channel.createMessageComponentCollector({ componentType: "BUTTON", filter, time, idle: Math.round(time/2), dispose: true });		
    


let currentPage = 0;
let stopped = false;

collector.on('collect', async int => {

int.deferUpdate();
if (int.user.id !== message.author.id) return int.reply(`This is ${message.author.toString()}'s buttons.`);

switch (
    int.customId
) {
    case `prev_${token}`:
        if (currentPage === 0) currentPage = pages.length - 1;
            else currentPage--;

        await	msg.edit({ embeds: [pages[currentPage]], components: [row] });
        break;
    case `next_${token}`:
        if (currentPage === pages.length - 1) currentPage = 0;
        else currentPage++;

        await msg.edit({ embeds: [pages[currentPage]], components: [row] });
        break;

    default:
        collector.stop();
            stopped = true;
        break;
}
});


collector.on('end', async () => {

    if (stopped === true) return;
    await msg.edit({ embeds: [pages[currentPage]], components: [new Discord.MessageActionRow().addComponents(buttons.map(b => b.setDisabled(true)))] });

});
};
