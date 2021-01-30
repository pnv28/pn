const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let taggedUser = message.mentions.users.first();

    if (!taggedUser)
      return message.channel.send("Who are You Telling Good Game To");

    message.channel.send(
      `**${taggedUser}, ${message.author} Wishes You a Good Game**`
    );
}

module.exports.help = {
  name: "gg"
}
