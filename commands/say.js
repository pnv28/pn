const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let text = message.content.split(" ").slice(1).join(" ");
  if (!args.length) {
    return message.channel.send(
      `You never told me what to say,${message.author}`
    );
  }

  message.channel.send(`${text}`);
}

module.exports.help = {
  name: "say"
}