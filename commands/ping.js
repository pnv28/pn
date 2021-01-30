const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  message.channel.send("🏓 Calculating ping ... 🏓").then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp;

    resultMessage.edit(`🏓 Bot Latency: **${ping}ms** 🏓 `);
  });
}

module.exports.help = {
  name: "ping"
}