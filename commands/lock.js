
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("MANAGE_CHANNELS")) {
    message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
      VIEW_CHANNEL: false,
    });
    message.channel.send("Channel has been locked");
  } else {
    message.channel.send("Insufficent permissions");
  }
}

module.exports.help = {
  name: "lock"
}
