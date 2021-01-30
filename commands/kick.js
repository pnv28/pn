const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("KICK_MEMBERS")) {
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member
          .kick()
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch((err) => {
            message.reply(
              `Unable to kick ${user.tag}, Make sure my role is above ${user.tag}'s role`
            );
          });
      } else {
        message.reply("That user isn't in this server");
      }
    } else {
      message.reply("Specify who to kick");
    }
  } else {
    message.reply("Insufficent Permisions");
  }
}

module.exports.help = {
  name: "kick"
}