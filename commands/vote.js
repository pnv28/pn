const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Vote")
      .setURL("https://top.gg/bot/764542620734718003/vote")
      .setFooter(
        "Click Vote to go to Voting Link",
        "https://cdn.discordapp.com/avatars/764542620734718003/afe25e0424e2af4831fba80afc63b644.png"
      );

    message.channel.send(exampleEmbed);
}

module.exports.help = {
  name: "vote"
}