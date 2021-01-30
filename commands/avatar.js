const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const AvatarEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`Avatar`)
      .setAuthor(`${message.author.username}`)
      .setImage(
        `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`
      )
      .setTimestamp();

    if (!message.mentions.users.size) {
      return message.channel.send(AvatarEmbed);
    }

    const avatarList = message.mentions.users.map((user) => {
      return `${user.displayAvatarURL({ format: "png", dynamic: true })}`;
    });

    const AvatarEmbed2 = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`Avatar`)
      .setAuthor(`${message.author.username}`)
      .setImage(`${avatarList}`)
      .setTimestamp();

    message.channel.send(AvatarEmbed2);
}

module.exports.help = {
  name: "avatar"
}
