const ms = require("ms");
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("MANAGE_ROLES")) {
    let target = message.mentions.users.first();
    let text = message.content.split(" ").slice(3).join(" ");
    let time = args[1];

    if (!text) {
      text = "No Reason Provided";
    }
    if (!target) {
      message.channel.send(
        "```!mute [Member] [Time] [Reason]\n\nMember is Missing```"
      );
      return;
    }

    if (!time) {
      message.channel.send(
        "```!mute [Member] [Time] [Reason]\n\nTime is Missing```"
      );
      return;
    }

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

      target.send(
        `You Have Been Muted in **${
          message.guild.name
        }**\nReason: **${text}**\nYou are muted for the Following Time: ${ms(
          ms(time)
        )}\nResponsile Moderator: ${message.author}`
      );
      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(muteRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> has been Muted for ${ms(ms(time))}`
      );

      setTimeout(function () {
        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
      }, ms(time));
    }
  } else {
    message.channel.send("Insufficent Permission");
  }
}

module.exports.help = {
  name: "mute"
}
