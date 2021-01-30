const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("MANAGE_ROLES")) {
    const target = message.mentions.users.first();

    if (target) {
      let mainRole = message.guild.roles.cache.find(
        (role) => role.name === "Member"
      );
      if (!mainRole) {
        message.channel.send(
          'No Member Role Found. Please Make a Role with the name "Member"'
        );
        return;
      }
      let muteRole = message.guild.roles.cache.find(
        (role) => role.name === "Mute"
      );
      if (!muteRole) {
        message.channel.send(
          'No Mute Role Found. Please Make a Role with the name "Mute"'
        );
        return;
      }

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      memberTarget.roles.add(mainRole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been un-muted`);
    } else {
      message.channel.send(`Couldn't Find that Member!`);
    }
  } else {
    message.channel.send("Insufficent Permission");
  }
}

module.exports.help = {
  name: "unmute"
}