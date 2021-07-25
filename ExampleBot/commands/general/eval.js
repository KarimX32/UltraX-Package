const Discord = require("discord.js");
// const {
//   post
// } = require("node-superfetch");

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
  embed.setTimestamp()
  embed.setFooter(
    "Requested by " + message.author.username,
    message.author.displayAvatarURL({
      format: "png",
      dynamic: true
    })
  );
  try {

    const code = args.join(" ");
    if (!code) return message.channel.send("Please include the code.")
    let evaled;

    // This method is to prevent someone that you trust, open the secret shit here.
    if (code.includes(`client.token`) || code.includes(`client.login`)) {
      evaled = "No";
    } else {
      try {
        evaled = eval(code)
      } catch (err) {
        embed.setDescription(err)
        message.channel.send(embed).then(a => setTimeout(() => {
          a.delete()
        }, 5000)).catch();

      }
    }

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {
      depth: 0
    });

    let output = clean(evaled);
    if (output.length > 2048) {
      for (let i = 0; i < output.length; i += 2048) {
        const toSend = output.substring(i, Math.min(output.length, i + 2048));
        const e2 = new Discord.MessageEmbed()
          .setDescription(toSend)
          .setColor("YELLOW")
          .setTimestamp()
          .setFooter(
            "Requested by " + message.author.username,
            message.author.displayAvatarURL({
              format: "png",
              dynamic: true
            })
          );

        message.channel.send(e2).then(m => {
          m.react('❌')
          // First argument is a filter function
          m.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❌'), {
            max: 1,
            time: 30000
          }).then(collected => {
            if (collected.first().emoji.name == '❌') {
              m.delete().catch();
            }
          }).catch(() => {
            m.reactions.removeAll().catch();
          });
        });
      }
    } else if (output.length < 2048) {
      embed.setDescription("```" + output + "```").setColor("GREEN")
    }
    /*     if (output.length > 2024) {
          // If the output was more than 1024 characters, we're gonna export them into the hastebin.
          const {
            body
          } = await post("https://hastebin.com/documents").send(output);
          embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("GREEN");
          // Sometimes, the body.key will turn into undefined. It might be the API is under maintenance or broken.
        } else { */
    //}

    message.channel.send(embed).then(m => {
      m.react('❌')
      // First argument is a filter function
      m.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❌'), {
        max: 1,
        time: 30000
      }).then(collected => {
        if (collected.first().emoji.name == '❌') {
          m.delete().catch();
        }
      }).catch(() => {
        m.reactions.removeAll().catch();
      });
    });

  } catch (error) {
    let err = clean(error);
    if (err.length > 2048) {
      for (let i = 0; i < err.length; i += 2048) {
        const toSend = err.substring(i, Math.min(err.length, i + 2048));
        const e2 = new Discord.MessageEmbed()
          .setDescription(toSend)
          .setColor("YELLOW")
          .setTimestamp()
          .setFooter(
            "Requested by " + message.author.username,
            message.author.displayAvatarURL({
              format: "png",
              dynamic: true
            })
          );

        message.channel.send(e2).then(m => {
          m.react('❌')
          // First argument is a filter function
          m.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '❌'), {
            max: 1,
            time: 30000
          }).then(collected => {
            if (collected.first().emoji.name == '❌') {
              m.delete().catch();
            }
          }).catch(() => {
            m.reactions.removeAll().catch();
          });
        });
      }
    } else if (err.length < 2048) {
      embed.setDescription("```" + err + "```").setColor("RED");
    }
    /*     if (err.length > 2024) {
          const {
            body
          } = await post("https://hastebin.com/documents").send(err);
          embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED");
        } else { */
    // }

    message.channel.send(embed).then(a => setTimeout(() => {
      a.delete()
    }, 5000)).catch();
  }
  //===============================================================================================


}

exports.help = {
  name: "eval",
  description: "Evaluate some code.",
  usage: "eval <code>",
  example: "eval client.commands"
}

exports.conf = {
  aliases: ["ev"]
}

function clean(string) {
  if (typeof string === "string") {
    return string.replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
  } else {
    return string;
  }
}
