const sussyBaka = require('../../../classes/sussybaka');

exports.run = async (client, message, args, logger) => {

    const sus = new sussyBaka(message.author.displayAvatarURL({ format: 'png' }));
    const Image = await sus.get();

   return message.channel.send(Image)


}


exports.help = {
    name: "sussybaka",
    description: "Make a sussybaka",
    usage: "sussybaka",
    example: "sussybaka"
}

exports.conf = {
    aliases: ["baka"],
    cooldown: 5 
}