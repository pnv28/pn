const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const inviteEmbed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Invite")
  .setURL("https://top.gg/bot/764542620734718003/invite")
  .setFooter(
    "Click Vote to go to Invite Link",
    "https://cdn.discordapp.com/avatars/764542620734718003/afe25e0424e2af4831fba80afc63b644.png"
  );

message.channel.send(inviteEmbed);
}

module.exports.help = {
  name: "invite"
}
