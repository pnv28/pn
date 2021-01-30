const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const amount = parseInt(args[0]) + 1;

    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      if (isNaN(amount)) {
        return message.reply("That isn't a valid numerical");
      } else if (amount <= 1 || amount > 100) {
        return message.reply("Keep a number between 1 and 99");
      }
      message.channel.bulkDelete(amount, true).catch((err) => {
        console.error(err);
        message.channel.send("There was a error, Please try again later");
      });
      message.channel
        .send(`\`${amount - 1}\` message is deleted`)
        .then((msg) => {
          msg.delete({ timeout: 7000 });
        }).catch;
    } else {
      message.channel.send("Insufficent Permissions");
      message.channel.bulkDelete(1);
    }
}

module.exports.help = {
  name: "clear"
}