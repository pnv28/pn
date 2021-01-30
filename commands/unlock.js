const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("MANAGE_CHANNELS")) {
    message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
      VIEW_CHANNEL: true,
    });
    message.channel.send("Channel has been unlocked, I think so");
  } else {
    message.channel.send("Insufficent permissions");
  }
}

module.exports.help = {
  name: "unlock"
}