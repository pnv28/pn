const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("BAN_MEMBERS")) {
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member
          .ban()
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch((err) => {
            message.reply(
              `Unable to ban ${user.tag}, Make sure my role is above ${user.tag}'s role`
            );
          });
      } else {
        message.reply("That user isn't in this server");
      }
    } else {
      message.reply("Specify who to Ban");
    }
  } else {
    message.reply("Insufficent Permisions");
  }
}

module.exports.help = {
  name: "ban"
}